import { DiGitBranch } from 'react-icons/di';
import styles from '../styles/partials/_GitGraph.module.scss';

type GitBranchColor = 'grey' | 'green' | 'yellow' | 'purple' | 'blue'

type GitBranchProps = {
    direction?: 'left' | 'right';
    color: GitBranchColor;
}


export default function GitBranch({
    direction = 'left',
    color = 'blue'
}: GitBranchProps) {
    const gitBranchClass = [styles.gitBranch, styles[color]]
    return (
        <div className={direction === 'left' ? styles.branchLeft : undefined}>
            <DiGitBranch className={gitBranchClass.join(' ')} />
        </div>
    )
}
