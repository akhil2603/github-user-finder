import React, {useContext} from 'react';
import RepoItem from './RepoItem';
import PropTypes from 'prop-types';
import GithubContext from '../../context/github/githubContext';
const Repo = () => {
    const githubContext = useContext(GithubContext);
    const {repos} = githubContext;
    return repos.map(repo=><RepoItem repo={repo} key={repo.id}/>)
}

Repo.propTypes = {
    repos: PropTypes.array.isRequired
}
export default Repo;
