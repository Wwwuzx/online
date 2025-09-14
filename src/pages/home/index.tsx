import { Link } from "react-router-dom";
import styles from './index.module.less';

function Home() {
  return (
    <div className={styles.home}>
      <div>
        <Link to="/test">测试页面</Link>
      </div>
      <div>
        <Link to="/prototype">Day1-原型链</Link>
      </div>
    </div>
  )
}

export default Home
