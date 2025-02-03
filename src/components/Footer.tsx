import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [isImprintOpen, setIsImprintOpen] = useState(false);

  return (
    <footer className="mt-8 bg-gray-50 text-sm">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="text-center">
          <p>Created by{' '}
            <a 
              href="https://thorge.xyz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Thorge.xyz
            </a>
            {' · '}
            <button
              onClick={() => setIsImprintOpen(!isImprintOpen)}
              className="text-gray-600 hover:text-gray-800 hover:underline"
            >
              Imprint
            </button>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Made with privacy in mind - your contacts never leave your computer
          </p>
        </div>

        {isImprintOpen && (
          <div className="mt-4 border-t border-gray-200 pt-4 text-xs text-gray-600 space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Operator of the website</h3>
              <p>- Wybren Tejat Ventures UG (haftungsbeschränkt)</p>
              <p>- c/o Thorge Lindner, Niederbarnimstraß 14, 10247 Berlin</p>
              <p>- Email: thorge.lindner[at]gmail[.]com</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Notice in accordance with the Online Dispute Settlement Ordinance</h3>
              <p>According to applicable law, we are obliged to inform consumers of the existence of the European online dispute resolution platform, which can be used to resolve disputes without the need for a court to be involved. The European Commission is responsible for setting up the platform. The European online dispute resolution platform can be found here: <a href="http://ec.europa.eu/odr" className="text-blue-600 hover:underline">http://ec.europa.eu/odr</a>. Our email is: mail[at]vincentweisser[]com However, we would like to point out that we are not prepared to participate in the dispute settlement procedure within the framework of the European online dispute settlement platform. To contact us, please use our e-mail and telephone number above.</p>
              
              <h3 className="font-semibold mb-2 mt-4">Note according to the Consumer Dispute Settlement Act (VSBG)</h3>
              <p>We are willing to participate in dispute settlement procedures before a consumer arbitration board.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Disclaimer - legal information</h3>
              <p>- § 1 Content Warning: The free and freely accessible content of this website was created with the greatest possible care. However, the provider of this website assumes no liability for the accuracy and timeliness of the free and freely accessible journalistic guides and news provided. Contributions marked by name reflect the opinion of the respective author and not always the opinion of the provider. Simply calling up the free and freely accessible content does not result in any contractual relationship between the user and the provider, and in this respect the provider lacks the will to be legally binding.</p>
              <p>- § 2 External links: This website contains links to third-party websites ("external links"). These websites are the responsibility of the respective operators. When the external links were first linked, the provider checked the third-party content for any legal violations. At the time, no legal violations were apparent. The provider has no influence on the current and future design and content of the linked pages. The setting of external links does not mean that the provider adopts the content behind the reference or link as his own. Constant monitoring of the external links is not reasonable for the provider without concrete evidence of legal violations. However, if we become aware of legal violations, such external links will be deleted immediately.</p>
              <p>- § 3 Copyright and ancillary copyrights: The content published on this website is free to use for anyone, unless someone else has outstanding copyright.</p>
              <p>This applies in particular to the duplication, processing, translation, storage, processing or reproduction of content in databases or other electronic media and systems. Contents and rights of third parties are marked as such. The unauthorized duplication or forwarding of individual content or complete pages is not permitted and is punishable by law. Only the production of copies and downloads for personal, private and non-commercial use is permitted. The presentation of this website in external frames is only permitted with written permission.</p>
              <p>- § 4 Special Terms of Use: Insofar as special conditions for individual uses of this website deviate from the aforementioned paragraphs, this will be expressly pointed out at the appropriate point. In this case, the special terms of use apply in each individual case.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Data privacy statement</h3>
              <p>- Data privacy: We are taking data privacy very serious. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy. The use of our website is usually possible without providing personal information. Should personal data (e.g. name, address or e-mail address) be elicited on one of our pages, this is always done on a voluntary basis. This data will not be transferred to third parties without your explicit consent. Please note that data transmission over the internet (e.g. communication via e-mail) can suffer from security gaps. A complete protection of the data from access by third parties is not possible.</p>
              <p>- Cookies: Google Sites may use Cookies. Cookies do not harm your computer and do not contain viruses. Cookies serve multiple purposes such as user-friendliness, security and performance. Cookies are small text files that are stored by your browser on your computer. Session cookies will automatically be deleted after your visit. Other cookies remain stored on your device until you delete them. These cookies allow the server to recognize your browser the next time you visit. It is possible to configure your browser in a way that you are informed about the placement of cookies. You can allow cookies only for individual cases, generally deactivate the acceptance of cookies and activate the automatic deletion of cookies. Disabling cookies may limit the functionality of this website.</p>
              <p>- Analytics: We use Google Analytics. Google Analytics utilizes cookies (see above) to analyze the usage of this website. To this end, the collected data will be sent to and stored on servers in the USA. We want to remind you of the possibility to prevent tracking by Google Analytics through the installation of a browser plugin: https://tools.google.com/dlpage/gaoptout?hl=de</p>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;