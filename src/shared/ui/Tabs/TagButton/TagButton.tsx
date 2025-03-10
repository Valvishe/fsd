import { TagButtonProps } from "./TagButton.props";
import styles from "./TagButton.module.css";

function TagButton({ className, text, cardsAmount, onClick, ...props }: TagButtonProps) {
  return (
    <button onClick={onClick} className={className} {...props}>
      <span className={styles.tagEditsMobile}>{text}</span>
      <span className={styles.tagEdits}>{text}</span>
      <span className={styles.tagReviewsCount} tabIndex={0}>{` (${cardsAmount})`}</span>
    </button>
  );
}

export default TagButton;
