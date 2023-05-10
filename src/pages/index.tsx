// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="goCellFix | We come to you"
          description="Cellphone, Tablets, Computer and other electronic repair services"
        />
      }
    >
      {/* $$$$$Men at Work$$$$$ */}
    </Main>
  );
};

export default Index;
