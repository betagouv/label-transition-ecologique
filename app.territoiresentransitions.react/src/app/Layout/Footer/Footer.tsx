import LogoRepubliqueFrancaise from 'ui/logo/LogoRepubliqueFrancaise';
import ademeLogoImage from 'app/static/img/ademe.jpg';

const Footer = () => {
  return (
    <footer
      className="footer fr-footer fr-mt-10w"
      role="contentinfo"
      id="footer"
    >
      <div className="fr-container">
        {/* BODY */}
        <div className="lg:flex">
          <div className="fr-footer__brand shrink-0">
            <LogoRepubliqueFrancaise />
            <div className="px-6">
              <img
                className="w-32"
                src={ademeLogoImage}
                alt="ADEME"
                loading="lazy"
              />
            </div>
          </div>
          <div className="fr-footer__content !mt-6 !flex-initial lg:!mt-0 lg:!ml-6">
            <h5 className="w-full mb-4">
              <a href="https://territoiresentransitions.fr" title="Accueil">
                Territoires en Transitions
              </a>
            </h5>
            <p className="fr-footer__content-desc">
              Territoires en transitions accompagne les collectivités afin de
              les aider à piloter plus facilement leur transition écologique.
            </p>
            <p className="fr-footer__content-desc">
              Vous rencontrez une difficulté ? Une suggestion pour nous aider à
              améliorer l'outil ?
              <br />
              Écrivez-nous à&nbsp;:&nbsp;
              <a href="mailto:aide@territoiresentransitions.fr?subject=Aide sur app.territoiresentransitions.fr">
                aide@territoiresentransitions.fr
              </a>
            </p>
            <ul className="fr-footer__content-list">
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://www.ademe.fr/"
                >
                  ademe.fr
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://beta.gouv.fr/"
                >
                  beta.gouv
                </a>
              </li>
              <li className="fr-footer__content-item">
                <a
                  className="fr-footer__content-link"
                  href="https://territoireengagetransitionecologique.ademe.fr"
                >
                  territoireengagetransitionecologique.ademe.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* MENTIONS LEGALES */}
        <div className="fr-footer__bottom">
          <ul className="fr-footer__bottom-list">
            <li className="fr-footer__bottom-item">
              <a
                className="fr-footer__bottom-link"
                href="https://territoiresentransitions.fr/mentions"
                rel="noopener noreferrer"
                target="_blank"
              >
                Mentions légales
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a
                className="fr-footer__bottom-link"
                href="https://www.ademe.fr/lademe/infos-pratiques/politique-protection-donnees-a-caractere-personnel"
                rel="external noreferrer"
                target="_blank"
              >
                Protection des données
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a
                className="fr-footer__bottom-link"
                href="https://territoiresentransitions.fr/stats"
                rel="noopener noreferrer"
                target="_blank"
              >
                Statistiques
              </a>
            </li>
            <li className="fr-footer__bottom-item">
              <a
                className="fr-footer__bottom-link"
                href="https://territoiresentransitions.fr/cgu"
                rel="noopener noreferrer"
                target="_blank"
              >
                Conditions générales d’utilisation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
