import React from "react"
import PropTypes from "prop-types"
import Issue from "./Issue"

function avatarForUser(user) {
  return user.avatar_url || user.gravatar_id
}

function IssueList({ issues }) {
  return (
    <ul className="issues">
      {issues.map(issue => (
        <li key={issue.id}>
          <Issue
            number={issue.number}
            title={issue.title}
            labels={issue.labels}
            username={issue.user.login}
            avatarUrl={avatarForUser(issue.user)}
            summary={issue.body}
          />
        </li>
      ))}
    </ul>
  )
}

IssueList.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      number: PropTypes.number.isRequired,
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
        gravatar_id: PropTypes.string
      }).isRequired,
      title: PropTypes.string,
      body: PropTypes.string,
      labels: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          color: PropTypes.string
        })
      )
    })
  )
}

export default IssueList
