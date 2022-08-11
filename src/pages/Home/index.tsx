import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
// import { useModel } from '@umijs/max';
import useUser from '@/models/global';
import useCount from '../../models/count';
import styles from './index.less';

const HomePage: React.FC = () => {
  // const { name, setName } = useModel('global');
  // const { count, setCount } = useModel('count');

  const { name, setName } = useUser();
  const { count, setCount } = useCount();

  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="button" onClick={() => setCount(count + 1)}>
          {count}
        </button>
      </div>
    </PageContainer>
  );
};

export default HomePage;
