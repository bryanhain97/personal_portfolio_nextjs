import { useEffect, useState, useContext } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/partials/_GitGraph.module.scss'
import { API } from './githubApi';
import GitBranch from './GitBranch';
import { Octokit } from 'octokit';
import { Container, Select } from '@chakra-ui/react';
import { LoaderContext } from './layout';

const octokit = new Octokit({ auth: API.GITHUB_API_ACCESS_TOKEN });

const githubProjects = [
    { repository: 'my-remix-test', title: 'My Remix Test' },
    { repository: 'personal_portfolio_nextjs', title: 'Personal Portfolio' },
    { repository: 'Image-Text-Recognizer', title: 'Image Text Recognizer' },
    { repository: 'apple_desk', title: 'Apple Desk UI' },
]

export default function GitGraph() {
    const { showLoader } = useContext(LoaderContext)
    const [repo, setRepo] = useState<string>('my-remix-test');
    const [data, setData] = useState<any[] | null>(null);
    const TRANSITION_DELAY = 0.25

    useEffect(() => {
        fetchRepoData(repo)
    }, [repo])

    const options = githubProjects.map(({ repository, title }, idx) => <option value={repository} key={idx}>{title}</option>)
    return (
        <>
            {!showLoader &&
                <motion.div
                    className={styles.gitGraph}
                    animate={{ opacity: [0, 1] }}
                >
                    <Select
                        mb={3}
                        size='md'
                        fontWeight={800}
                        value={repo}
                        onChange={(e) => setRepo(e.target.value)}
                    >
                        {options}
                    </Select>
                    <Container
                        display='flex'
                        flexDirection='column'
                        p='0'
                        rowGap='5px'
                        maxHeight='200px'
                        overflowY='scroll'
                    >
                        {data && data.length > 0 && data.map(({ sha, commit, html_url: url }, idx) => {
                            return (
                                <GitBranch
                                    key={sha}
                                    commit={sha.substring(0, 7)}
                                    commitMessage={commit.message}
                                    url={url}
                                    delay={idx * TRANSITION_DELAY}
                                    date={commit.author.date}
                                />)
                        })}
                    </Container>
                </motion.div>
            }
        </>
    )

    /**
     * FUNCTIONS
     */
    async function fetchRepoData(repo: string) {
        const req = await octokit.request('GET /repos/{owner}/{repo}/commits', {
            owner: API.GITHUB_USERNAME,
            repo,
        });
        setData(req.data);
    }
}
