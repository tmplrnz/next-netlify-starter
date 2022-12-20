import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
     

<script type='text/javascript' src='https://service.force.com/embeddedservice/5.0/esw.min.js'></script>
<script type='text/javascript'>
	var initESW = function(gslbBaseURL) {
		embedded_svc.settings.displayHelpButton = true; 
		embedded_svc.settings.language = ''; 

		

		embedded_svc.settings.enabledFeatures = ['LiveAgent'];
		embedded_svc.settings.entryFeature = 'LiveAgent';

		embedded_svc.init(
			'https://crm-comunebergamo--uat.sandbox.my.salesforce.com',
			'https://crm-comunebergamo--uat.sandbox.my.site.com/',
			gslbBaseURL,
			'00D1q0000000O9Z',
			'Comune_di_Bergamo',
			{
				baseLiveAgentContentURL: 'https://c.la1-c1cs-cdg.salesforceliveagent.com/content',
				deploymentId: '5721q0000008Odc',
				buttonId: '5731q0000008PtA',
				baseLiveAgentURL: 'https://d.la1-c1cs-cdg.salesforceliveagent.com/chat',
				eswLiveAgentDevName: 'Chatbot_Comune_Bergamo',
				isOfflineSupportEnabled: false
			}
		);
	};

	if (!window.embedded_svc) {
		var s = document.createElement('script');
		s.setAttribute('src', 'https://crm-comunebergamo--uat.sandbox.my.salesforce.com/embeddedservice/5.0/esw.min.js');
		s.onload = function() {
			initESW(null);
		};
		document.body.appendChild(s);
	} else {
		initESW('https://service.force.com');
	}
</script>
      </main>

      <Footer />
    </div>
  )
}
