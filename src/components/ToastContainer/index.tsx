import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';
import { Container } from './styles';
import { ToastMessage } from '../../hooks/toast';

interface ToastConstainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastConstainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(messages, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 0 },
  });

  return (
    <Container>
      {messagesWithTransitions((styles, item) => (
        <Toast style={styles} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
