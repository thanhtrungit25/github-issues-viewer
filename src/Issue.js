import React from "react";

export default function Issue({
  number,
  title,
  labels,
  username,
  avatarUrl,
  summary
}) {
  return (
    <div className="issue">
      <div className="issue_user">
        <img className="issue__user__avatar" src={avatarUrl} alt="" />
        <div className="issue_user__name">{username}</div>
      </div>
      <div>
        <div>
          <span className="issue__number">#{number}</span>
          <span className="issue__title">{title}</span>
        </div>
        <p className="issue__summary">{summary}</p>
        <div className="issue__labels">
          {labels.map(label => (
            <span className="issue__label" key={label}>
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

Issue.propTypes = {};
