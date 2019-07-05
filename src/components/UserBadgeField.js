import React from 'react';
import { Col } from 'reactstrap';

export default function UserBadgeField(props) {
    return (
      <Col xs="12" sm="6">
        <span className="user-badge-label">{props.label}:</span>
        <span className="user-badge-value">{props.value ? props.value : 'N/A'}</span>
      </Col>
    );
  }
  