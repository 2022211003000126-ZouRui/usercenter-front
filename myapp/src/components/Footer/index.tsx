import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = '有马公生技术部出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: '模拟宇宙',
          title: '模拟宇宙',
          href: 'https://sr.mihoyo.com/ad?from_channel=adbdpz&utm_source=mkt&utm_medium=branding&utm_campaign=583087',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/ant-design/ant-design-pro',
          blankTarget: true,
        },
        {
          key: '编程导航',
          title: '每日委托',
          href: 'https://www.code-nav.cn/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
