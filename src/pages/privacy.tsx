/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import styles from './contentPage.module.scss';

import NextSeoWrapper from 'src/components/NextSeoWrapper';
import PageContainer from 'src/components/PageContainer';
import { getLanguageAlternates } from 'src/utils/locale';
import { getCanonicalUrl } from 'src/utils/navigation';

const PATH = '/privacy';
const PrivacyPage = () => {
  const { t, lang } = useTranslation('privacy');

  return (
    <>
      <NextSeoWrapper
        title={t('header')}
        url={getCanonicalUrl(lang, PATH)}
        languageAlternates={getLanguageAlternates(PATH)}
      />
      <PageContainer>
        <div className={styles.contentPage}>
          <h1>{t('header')}</h1>
          <p>
            <Trans
              i18nKey="privacy:main-desc"
              components={[<a key={0} href="salah.com" target="_blank" />]}
            />
          </p>
          <p>
            <Trans
              i18nKey="privacy:ga"
              components={[
                <a
                  key={0}
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                />,
              ]}
            />
          </p>
          <p>
            <Trans i18nKey="privacy:footer" />
          </p>
        </div>
      </PageContainer>
    </>
  );
};

export default PrivacyPage;
