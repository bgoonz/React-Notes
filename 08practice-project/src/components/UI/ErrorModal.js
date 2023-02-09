import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}>
        <Card className={styles.modal}>
          <header className={styles.header}>
            <h2>{props.title}</h2>
          </header>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
          <footer className={styles.actions}>
            <Button onClick={props.onConfirm}>Ok</Button>
          </footer>
        </Card>
      </div>
    </div>
  );
};

export default ErrorModal;
