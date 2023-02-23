import styles from '../styles/partials/_GitGraph.module.scss';
import { DiGitBranch } from 'react-icons/di';
import GitBranch from './GitBranch';

export default function GitGraph() {

    return (
        <div className={styles.gitGraph}>
            <GitBranch direction='left' color='yellow' />
            <GitBranch direction='right' color='green' />
            <GitBranch direction='left' color='grey' />
            <GitBranch direction='right' color='purple' />
            <GitBranch direction='left' color='blue' />
            <GitBranch direction='right' color='green' />
            <GitBranch direction='left' color='grey' />
            <GitBranch direction='right' color='purple' />
            <GitBranch direction='left' color='blue' />
        </div>
    )
}
