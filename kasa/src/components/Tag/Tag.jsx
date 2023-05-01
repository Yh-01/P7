import styles from './Tag.module.css'

//Création des tags
function Tag(props) {
  const tagLists = props.text.map((tag, index) => (
    <div key={index} className={styles.container}>
      <p className={styles.text}>{tag}</p>
    </div>
  ))
  return <div className={styles.tags}>{tagLists}</div>
}
export default Tag
