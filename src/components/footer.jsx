import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
  return (
    <footer id="footer" className="py-5 bg-light text-center">
      <p className="mb-0">{t('footer.copy')}</p>
    </footer>
  );
};

export default Footer;
