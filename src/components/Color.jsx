import styles from '../styles/Color.module.css';

export default function Color(props) {
    return (<div className={styles.containerColor} style={{
        backgroundColor: props.color
    }}>
    </div>)
}