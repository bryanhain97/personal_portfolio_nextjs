import { useEffect, useState, useContext, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/partials/_GitGraph.module.scss'
import GitBranch from './GitBranch';
import { Octokit } from 'octokit';
import { Container, Select, Text, Box, useMediaQuery } from '@chakra-ui/react';
import { LoaderContext } from './layout';
import { DiGithubBadge } from 'react-icons/di';

const octokit = new Octokit({});

const githubProjects = [
    { repository: 'dg-frontend-task-solution', title: 'De Gruyter Task' },
    { repository: 'my-remix-test', title: 'My Remix Test' },
    { repository: 'personal_portfolio_nextjs', title: 'Personal Portfolio' },
    { repository: 'Image-Text-Recognizer', title: 'Image Text Recognizer' },
    { repository: 'apple_desk', title: 'Apple Desk UI' },
] as const;

type GitHubProject = typeof githubProjects[number];
type GithubRepository = typeof githubProjects[number]['repository'];

export default function GitGraph() {
    const { showLoader } = useContext(LoaderContext)
    const [repo, setRepo] = useState<GithubRepository>('personal_portfolio_nextjs');
    const [data, setData] = useState<any[] | null>(null);
    const [isSmallerThan425] = useMediaQuery('(max-width: 425px)');
    const TRANSITION_DELAY = 0.08 // Change this with framer-motion's staggerChildren

    useEffect(() => {
        fetchRepoData(repo) // change for React 18 use + Suspense + ErrorBoundary
    }, [repo])

    const options = useMemo(() => githubProjects.map(({ repository, title }: GitHubProject, idx) => <option value={repository} key={idx} aria-label={title}>{title}</option>), [])
    const branches = data && data.map(({ sha, commit, html_url: url }, idx) =>
        (<GitBranch key={sha} commit={sha.substring(0, 7)} commitMessage={commit.message} url={url} delay={idx * TRANSITION_DELAY} date={commit.author.date} />))

    return (
        <>
            {!showLoader &&
                <motion.div className={styles.gitGraph} animate={{ opacity: [0, 1] }}>
                    <Container p='15' m='0' w={isSmallerThan425 ? '360px' : '420px'}>
                        <Box display='flex' mb='1'>
                            <Text color='blue.700' fontSize='4xl'>Latest commits</Text>
                            <a href='https://github.com/' target='_blank' rel='noreferrer' className={styles.github}>
                                <DiGithubBadge className={styles.githubLogo} />
                            </a>
                        </Box>
                        <Select mb={3} size='md' fontWeight={600} value={repo} aria-label='Select Repository' onChange={(e) => setRepo(e.target.value as GithubRepository)}>
                            {options}
                        </Select>
                        <Container display='flex' flexDirection='column' p='0' rowGap='5px' maxHeight='200px' overflowY='scroll'>
                            {branches}
                        </Container>
                        <p className={styles.modalInfo}>
                            with <a href='https://docs.github.com/en/rest/' rel='noreferrer' target='_blank'>GitHub REST API</a>
                        </p>
                    </Container>
                </motion.div>
            }
        </>
    )

    /**
     * FUNCTIONS
     */
    async function fetchRepoData(repo: string) {
        const octokitOptions = {
            owner: 'bryanhain97',
            repo
        }
        const [req, req2] = await Promise.all([
            octokit.request('GET /repos/{owner}/{repo}/commits', octokitOptions),
            octokit.request('GET /repos/{owner}/{repo}', octokitOptions)
        ]) // Promise.all([fetch1,fetch2]) improves request time over doing 2 single requests
        const { description: reqDescription } = req2.data;

        setData(req.data);
    }
}
