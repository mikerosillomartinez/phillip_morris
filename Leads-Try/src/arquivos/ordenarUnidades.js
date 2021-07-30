var $cookieOrdenarUnidades = `<div>
                <div class="service-content content-centered-cookies">
                    <h1 class="service-content__title">Cookies</h1>
                    <h3 class="service-content__subtitle">¿Qué cookies utilizamos?</h3>
                    <div class="service-content__intro">
                    <p>¿Qué son las cookies? Las cookies son pequeños archivos de texto que se colocan en tu dispositivo cuando visitas un sitio, las cuales se utilizan luego para identificar tu dispositivo para los fines descritos aquí. Las cookies establecidas por el propietario de un sitio se denominan “cookies de origen” (first party cookies). Las cookies establecidas por otras personas se denominan “cookies de terceros” (third party cookies). Las cookies de terceros permiten al tercero proporcionar características o funcionalidad en o a través del sitio (como análisis, publicidad y vídeos). Las partes que establecen estas cookies de terceros pueden reconocer tu dispositivo cuando visitas nuestro sitio y cuando visitas otros sitios. Utilizamos cookies (y otras tecnologías similares) en este sitio. Estas cookies se dividen en tres categorías. Las cookies de la primera categoría son necesarias. Las de las dos categorías restantes son opcionales: puedes decidir si deseas recibirlas de nosotros y, además, puedes utilizar esta herramienta para establecer tus preferencias. Puedes cambiar de opinión en cualquier momento y cambiar tus preferencias siguiendo el enlace a las preferencias de cookies desde cualquier página del sitio.</p>
                    </div>
                    <hr class="line">
                    <div class="container cookies">
                    <div class="col-3 contain" style="">
                        <legend class="legend-desktop over">Cookies operativas</legend>
                        <div class="cookie-set__status top">
                        <svg height="32px" width="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <g fill="none" fill-rule="evenodd">
                            <circle cx="16" cy="16" fill="#272a33" r="16"></circle>
                            <path d="m8 17.2337322 4.2303003 4.7662678 11.7696997-12" stroke="#92b934" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5"></path></g></svg>
                        <span class="cookie-set__status-label"><div v-if="this.all_cookies_allowed == true">On</div><div v-else >Off <br />Please allow cookies to turn on</div> </span>
                        </div>
                    </div>
                    <div class="col-9 contain">
                        <div class="cookie-set top">
                        <div class="cookie-set__intro">
                            <div class="cookie-set__flex-wrapper">
                            <div class="legend-wrapper">
                                <legend class="legend-desktop under">Cookies operativas</legend>
                                <p class="paragraph">Estas son estrictamente necesarias para el funcionamiento del sitio o para que las funciones que has elegido en él operen de una manera conveniente. Ejemplos: recordar quién eres, tus preferencias y tu configuración; de esta manera, no tendrás que introducirlas cada vez que cambies de página. Estas cookies son esenciales para la operación del sitio o para sus funciones; por este motivo, esta herramienta no ofrece la opción de rechazar su uso (opt-out). No obstante, si así lo deseas, puedes configurar tu navegador para que rechace todas las cookies, en cuyo caso es posible que el sitio no se muestre correctamente y que las funciones que selecciones no estén disponibles.</p>
                                <a style="font-family: 'Noto Sans', sans-serif;border: none;padding-left: 0px;cursor:pointer;font-size: 1.4rem;
                                line-height: 1.71;color: #545454;text-decoration: underline;"
                                @click="showMoreInfo1()"  data-category="Dialog (Cookie Policy)" data-action="Button Click - accept" data-label="MX" data-event="Clic">Conoce más</a>
                                <p v-if="more_info_operativas" style="color:#545454">Cookies en uso</p>
                                <p v-if="more_info_operativas" style="color:#545454 !important">
                                    <a id="tooltip2" style="text-decoration: underline;" target="_blank" href="https://cookiepedia.co.uk/cookies/.ASPXAUTH" > .ASPXAUTH, </a>
                                    <a id="tooltip2" style="text-decoration: underline;" target="_blank" href="https://cookiepedia.co.uk/cookies/i18next" > i18next, </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > _dc_gtm_UA-xxxxxxxx,
                                        <span class="tooltiptext" id="_dc_gtm_UA-xxxxxxxx">
                                        Esta cookie está asociada con sitios que utilizan Google Tag Manager para cargar otros scripts y códigos en una página. Cuando se usa, puede considerarse estrictamente necesario, ya que sin él, es posible que otros scripts no funcionen correctamente. El final del nombre es un número único que también es un identificador de una cuenta de Google Analytics asociada.</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > SGTS,
                                        <span class="tooltiptext" >Cookie de seguridad necesaria para el funcionamiento básico del sitio.</span> 
                                    </a>
                                   
                                    <a id="tooltip2" style="text-decoration: underline;" target="_blank" href="https://cookiepedia.co.uk/cookies/cookies.js" > cookies.js, </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > VtexRCRequestCounter,
                                        <span class="tooltiptext" id="VtexRCRequestCounter">VTEX - Cookie que recolecta información anónima para dimensionar el tamaño y tiempo de respuesta de los servidores y mejorar la navegación.</span> 
                                    </a>
                                    <a id="tooltip2" style="text-decoration: underline;"  > VtexRCMacIdv7,
                                        <span class="tooltiptext" id="VtexRCMacIdv7">VTEX - Cookie que recolecta información anónima para dimensionar el tamaño y tiempo de respuesta de los servidores y mejorar la navegación.</span> 
                                    </a>
                                    
                                    <a id="tooltip2"  style="text-decoration: underline;"  > ISSMB,
                                        <span class="tooltiptext" >Security cookie necessary for the basic operation of the site.</span> 
                                    </a>

                                    <a id="tooltip2"  style="text-decoration: underline;"  > Tracking,
                                        <span class="tooltiptext" id="Tracking">Interna - Desarrollador - Define si el usuario ha aceptado las cookies de seguimiento.</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > janus_sid,
                                        <span class="tooltiptext" >Cookie de seguridad necesaria para el funcionamiento básico del sitio.</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > Technical,
                                        <span class="tooltiptext" id="Technical">Interna - Desarrollador - Cookie necesaria para operaciones en sitio, no opcional.</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > _hjTLDTest,
                                        <span class="tooltiptext" >Hotjar Cuando se ejecuta el script Hotjar, intentamos determinar la ruta de cookies más genérica que debemos usar, en lugar del nombre de host de la página. Esto se hace para que las cookies se puedan compartir entre subdominios (cuando corresponda). Para determinar esto, intentamos almacenar la cookie _hjTLDTest para diferentes alternativas de subcadena de URL hasta que falle. Después de esta verificación, se elimina la cookie.</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > VtexFingerPrint,
                                        <span class="tooltiptext" id="VtexFingerPrint">VTEX - Es una cookie necesaria para Cookiebot de VTEX</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > VTEXSC,
                                        <span class="tooltiptext" >Cookie de seguridad necesaria para el funcionamiento básico del sitio.</span> 
                                    </a>
                                    <a id="tooltip2"  > _hjIncludedInPageviewSample,
                                        <span class="tooltiptext" >Hotjar - Esta cookie está configurada para que Hotjar sepa si ese visitante está incluido en el muestreo de datos definido por el límite de visitas a la página de su sitio. https://help.hotjar.com/hc/en-us/articles/115011789248-Hotjar-Cookie-Information</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > vtex_segment,
                                        <span class="tooltiptext" id="vtex_segment">VTEX - VTEX Sessions también crea la cookie VTEX_segment. Esta cookie contiene la información con las condiciones comerciales que se aplicarán a una sesión.</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > VtexRCSessionIdv7,
                                        <span class="tooltiptext" id="VtexRCSessionIdv7">VTEX - Cookie que recolecta información anónima para dimensionar el tamaño y tiempo de respuesta de los servidores y mejorar la navegación.</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > Performance,
                                        <span class="tooltiptext" id="Performance">Interna - desarrollador - Define si el usuario ha aceptado las cookies de desempeño</span> 
                                    </a>
                                    <a id="tooltip2"  style="text-decoration: underline;"  > vtex_session,
                                        <span class="tooltiptext" id="vtex_session">VTEX - El Sistema de Sesiones identifica, a través de la cookie de sesión vtex, la información de una sesión específica de un usuario navegando en la tienda. </span> 
                                    </a>
                                    
                                    <a id="tooltip2"  style="text-decoration: underline;"  > checkout.vtex.com,
                                        <span class="tooltiptext" >
                                        Con esta cookie podemos usar la api de pago para agregar productos y realizar otras operaciones en el mismo proceso de pago que la sesión del usuario.</span> 
                                    </a>
                                    
                                    <a id="tooltip2"  style="text-decoration: underline;"  > _hjFirstSeen,
                                        <span class="tooltiptext" id="_hjFirstSeen">hotjar.com - Estas cookies son establecidas por HotJar. Se utilizan con fines analíticos para rastrear cómo los usuarios interactúan con la página web. El propósito principal de las cookies establecidas por este host es: Rendimiento.</span> 
                                    </a>
                                    
                                    <a id="tooltip2"  style="text-decoration: underline;"  > __cfduid,
                                        <span class="tooltiptext" id="vtex_segment">Cloudflare - identificar visitantes individuales de forma privada  -  https://support.cloudflare.com/hc/en-us/articles/200170156-Understanding-the-Cloudflare-Cookies Ayuda a Cloudflare a detectar visitantes malintencionados a los sitios web, minimiza el bloqueo de usuarios legítimos.</span> 
                                    </a>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr class="line">
                    <div class="container cookies">
                    <div class="col-3 contain" >
                        <legend class="legend-desktop over">Cookies de rendimiento</legend>
                        <div class="wrap">
                            <div  class="cookie-set__status top">
                                <div v-if="this.getCookiePerformance() == 'true'  ">
                                    <div class="toggle-btn active">
                                    <input  type="checkbox" class="cb-value" />
                                    <span class="round-btn">
                                        <svg style="vertical-align: super;" width="24" height="24" viewBox="0 0 32 32">
                                            <path d="m8 17.2337322 4.2303003 4.7662678 11.7696997-12" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                        </svg>
                                    </span>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="toggle-btn">
                                    <input  type="checkbox" class="cb-value" />
                                    <span class="round-btn">
                                        <div></div>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top:5px">
                                <div v-if="this.getCookiePerformance() == 'true' ">
                                    <div class="status-1">
                                        <div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">On</div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="status-1">
                                        <div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Off</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-9 contain">
                        <div class="cookie-set top">
                        <div id="performance-cookie-name">
                            <div class="cookie-set__flex-wrapper">
                            <div class="legend-wrapper collapsible-section" data-showmore="Show more" data-showless="Show less">
                                <legend class="legend-desktop under">Cookies de rendimiento</legend>
                                <p class="paragraph">Estas nos permiten entender cómo la gente usa el sitio y qué tan bien se desempeña este. Nos permiten mejorar el funcionamiento del sitio. Estas tecnologías nos dan únicamente información anónima: la información que recopilan se reduce para que, de esta manera, solo se identifique el área donde te encuentras. Esta información se agrega antes de ser enviada a nosotros. Puedes optar por aceptarlas (opt in) o rechazar su uso (opt out).</p>
                                <a style="font-family: 'Noto Sans', sans-serif;border: none;padding-left: 0px;cursor:pointer;font-size: 1.4rem;
                                line-height: 1.71;
                                color: #545454;
                                text-decoration: underline;" @click="showMoreInfo2()"   data-category="Dialog (Cookie Policy)" data-action="Button Click - accept" data-label="MX" data-event="Clic">Conoce más</a>
                                <p v-if="more_info_performance" style="color:#545454">Cookies en uso</p>
                                <p v-if="more_info_performance" style="color:#545454 !important">
                                <a id="tooltip2"  style="text-decoration: underline;" target="_blank" href="https://cookiepedia.co.uk/cookies/_hjid" > _hjid, </a>
                                <a id="tooltip2"  style="text-decoration: underline;" target="_blank" href="https://cookiepedia.co.uk/cookies/_ga" > _ga, </a>
                                <a id="tooltip2"  style="text-decoration: underline;"  > _hjAbsoluteSessionInProgress,
                                    <span class="tooltiptext" >Hotjar - Se utiliza para detectar la primera sesión de vista de página de un usuario. Este es un indicador de Verdadero / Falso establecido por la cookie.</span> 
                                </a>
                                <a id="tooltip2"  style="text-decoration: underline;" target="_blank" href="https://cookiepedia.co.uk/cookies/_gat_UA-" > _gat_UA-, </a>
                                <a id="tooltip2"  style="text-decoration: underline;" target="_blank" href="https://cookiepedia.co.uk/cookies/_gid" > _gid. </a>
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <hr class="line">
                    <div class="container cookies">
                    <div class="col-3 contain" >
                        <legend class="legend-desktop over">Cookies de seguimiento</legend>
                        <div class="wrap">
                            <div  class="cookie-set__status top">
                                <div v-if="this.getCookieTracking() == 'true'  ">
                                    <div class="toggle-btn-2 active">
                                    <input  type="checkbox" class="cb-value-2" />
                                    <span class="round-btn-2">
                                        <svg style="vertical-align: super;" width="24" height="24" viewBox="0 0 32 32">
                                            <path d="m8 17.2337322 4.2303003 4.7662678 11.7696997-12" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                                        </svg>
                                    </span>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="toggle-btn-2 ">
                                    <input  type="checkbox" class="cb-value-2" />
                                    <span class="round-btn-2">
                                        <div></div>
                                    </span>
                                    </div>
                                </div>
                            </div>
                            <div style="margin-top:5px">
                                <div v-if="this.getCookieTracking() == 'true' ">
                                    <div class="status-2">
                                        <div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">On</div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="status-2">
                                        <div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Off</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-9 contain">
                        <div class="cookie-set top">
                        <div id="performance-cookie-name">
                            <div class="cookie-set__flex-wrapper">
                            <div class="legend-wrapper collapsible-section" data-showmore="Show more" data-showless="Show less">
                                <legend class="legend-desktop under">Cookies de seguimiento</legend>
                                <p class="paragraph">Estas rastrean el uso que haces de nuestro sitio y de otros sitios, de modo que podamos servirle a tu dispositivo, cuando visites este sitio u otros sitios, con información dirigida al uso que ellas han rastreado. Esto incluye mostrarte anuncios y personalizar el contenido de nuestras comunicaciones para que se adapten a tus preferencias. Esto puede implicar, también, la agregración de estos datos (para obtener una mejor comprensión del ambiente). Ejemplo: Uno de nuestros proveedores de servicios contrata a terceros para que rastreen y analicen el uso y volumen de información estadística de personas que visiten la plataforma digital. Puedes optar por aceptarlas (opt in) o rechazar su uso (opt out).</p>
                                <a style="font-family: 'Noto Sans', sans-serif;border: none;padding-left: 0px;cursor:pointer;font-size: 1.4rem;
                                line-height: 1.71;
                                color: #545454;
                                text-decoration: underline;" @click="showMoreInfo3()"  data-category="Dialog (Cookie Policy)" data-action="Button Click - accept" data-label="MX" data-event="Clic">Conoce más</a>
                                <p v-if="more_info_tracking" style="color:#545454" >Cookies en uso</p>
                                <p v-if="more_info_tracking" style="color:#545454" >
                                    No existen cookies de este tipo en uso por el momento. 
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <button id="set-cookie" type="button" class="form-submit-btn global-btn btn--dark">
                        <a href="/"><span class="btn__label">Aceptar</span></a>
                        <span class="svg-wrapper">
                            <svg class="gold-in" width="20px" height="13px" viewBox="0 0 60 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <title>Arrow right</title>
                                <path fill="#e5b052" d="M61.5,21.0012229 C61.5,21.1428603 61.4849919,21.285721 61.4558663,21.4283127 C61.4303624,21.5294036 61.4303624,21.5294036 61.4045212,21.6035806 C61.3931117,21.6366961 61.3931117,21.6366961 61.3826412,21.6687153 C61.377802,21.683353 61.377802,21.683353 61.3700945,21.7101624 C61.3551894,21.7629543 61.3551894,21.7629543 61.3265491,21.8371556 C61.2802411,21.9325695 61.2802411,21.9325695 61.2356165,22.0091233 L61.218312,22.0385176 C61.1971879,22.0752527 61.1971879,22.0752527 61.1875904,22.0941249 C61.1637725,22.1414847 61.1637725,22.1414847 61.1251472,22.2026949 C61.0656431,22.2905407 60.9998629,22.3680919 60.8986064,22.4743832 C60.8881532,22.4902312 60.8881532,22.4902312 60.8522509,22.5288516 L43.1421647,39.8660642 C42.2809914,40.7112298 40.8835925,40.7112298 40.0219404,39.8665568 C39.1588241,39.0233347 39.1588241,37.6551265 40.0217016,36.8102153 L53.9638111,23.1599883 L3.70701859,23.119374 C2.48772491,23.119374 1.5,22.1522148 1.5,20.9583083 C1.5,19.7642865 2.48784268,18.7964175 3.70729366,18.7964176 L53.9609215,18.8370305 L40.0251858,5.18986505 C39.1624859,4.34608877 39.1627895,2.97797612 40.0246828,2.13402921 C40.8850209,1.28871946 42.2833598,1.28871946 43.1452794,2.13365407 L60.8461643,19.4651631 C60.9498168,19.5657176 61.0423046,19.6762461 61.1281106,19.8008008 C61.1440802,19.8260433 61.1440802,19.8260433 61.1506896,19.8386986 C61.2230254,19.9493976 61.2827364,20.0581184 61.3334044,20.1771765 C61.3490006,20.2209904 61.3490006,20.2209904 61.355189,20.2445448 C61.403712,20.3731562 61.4349164,20.4715604 61.455822,20.5739188 C61.4794751,20.6879404 61.4911118,20.8071735 61.4943146,20.9339656 C61.4975533,20.9527485 61.4977118,20.9558899 61.5,21.0012229 Z"></path>
                            </svg>
                        </span>
                    </button>
                    <p class="form-note">Puedes cambiar tus preferencias en cualquier momento siguiendo el enlace a “Política de Cookies” desde cualquier página en este sitio. Toda la información personal recolectada será utilizada como se describe en nuestro <a href="https://www.pmiprivacy.com/es-la/consumer" target="_blank">Aviso de Privacidad</a>.</p>
                </div>
               </div>`;
Vue.component('cookie-ordenar-unidades-component', {
    'template': $cookieOrdenarUnidades,
    'data': function() {111
        return {
            "all_cookies_allowed":false,
            "more_info_operativas":false,
            "more_info_performance":false,
            "more_info_tracking":false
        };
    },
    'created': function(){
        var _self = this
        _self.check_if_cookies_allowed()
        setTimeout(function () {
            _self.datapushPag()
        },1500)
    },
    'methods': {
        "showMoreInfo1": function () {
            var _self = this
            
            if(_self.more_info_operativas == false){
                _self.more_info_operativas = true
            } else {
                _self.more_info_operativas = false
            }  
            
        },
        "showMoreInfo2": function () {
            var _self = this
            
            if(_self.more_info_performance == false){
                _self.more_info_performance = true
            } else {
                _self.more_info_performance = false
            }  
            
        },
        "showMoreInfo3": function () {
            var _self = this
            
            if(_self.more_info_tracking == false){
                _self.more_info_tracking = true
            } else {
                _self.more_info_tracking = false
            }
            
        },
        "getCookieTracking":function () {
            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            function checkCookie() {
                var cookie = getCookie("Tracking");
                return cookie
            } 
            return checkCookie()
        },
        "getCookiePerformance":function () {
            function getCookie(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for(var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            function checkCookie() {
                var cookie = getCookie("Performance");
                return cookie
            } 
            return checkCookie()
        },
        "reload": function(){window.location.reload(true);},
        "check_if_cookies_allowed": function () {
            var vm = this
            var ret = document.cookie != -1;
            vm.all_cookies_allowed = ret
            var exp = (new Date(Date.now()+ 86400*90000)).toUTCString();
            if(ret == false){
                return (document.cookie = 'Technical=false;expires='+exp+'; path=/',
                document.cookie = 'Tracking=false;expires='+exp+'; path=/',
                document.cookie = 'Performance=false;expires='+exp+'; path=/')
            } 
        },
        "cookiePerformanceDatapush_opt_in": function () {
            try {
                window.dataLayer.push({
                    event: "cookieClick",
                    category: "Dialog (Cookie Settings)",
                    action: "Cookie type: performance",
                    label: "opt-in"
                })
            } catch (e) {console.log(e)}            
        },
        "cookieTrackingDatapush_opt_in": function () {
            try {
                window.dataLayer.push({
                    event: "cookieClick",
                    category: "Dialog (Cookie Settings)",
                    action: "Cookie type: tracking",
                    label: "opt-in"
                })
            } catch (e) {console.log(e)}            
        },
        "cookiePerformanceDatapush_opt_out": function () {
            try {
                window.dataLayer.push({
                    event: "cookieClick",
                    category: "Dialog (Cookie Settings)",
                    action: "Cookie type: performance",
                    label: "opt-out"
                })
            } catch (e) {console.log(e)}            
        },
        "cookieTrackingDatapush_opt_out": function () {
            try {
                window.dataLayer.push({
                    event: "cookieClick",
                    category: "Dialog (Cookie Settings)",
                    action: "Cookie type: tracking",
                    label: "opt-out"
                })
            } catch (e) {console.log(e)}            
        },
        "aceptarButtonDataPush": function () {
            try {
                window.dataLayer.push({
                    event: "cookieClick",
                    category: "Dialog (Cookie Settings)",
                    action: "Button Click-accept",
                    label: "MX"
                })
            } catch (e) {console.log(e)}            
        },
        "datapushPag": function () {
            try {
                window.dataLayer.push({
                    event: "PVCookie",
                    category: window.location.href,
                    action: $("title").text(),
                    label: "MX"
                })
            } catch (e) {console.log(e)}            
        },
        "makeItPopup": function(id){
            var popup = document.getElementById(id);
            console.log("res",popup)
            popup.classList.toggle("show");    
        }    
        
    },
    'mounted': function(){
        var self = this
        $(function() { 
            if(self.all_cookies_allowed == false){
                $('.round-btn').html(
                    `<div></div>`
                );
                $('.round-btn-2').html(
                    `<div></div>`
                );
                $('.status-1').html(`<div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Off</div>`);
                $('.status-2').html(`<div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Off</div>`);  
            } 
            $('.cb-value').click(function() {
                var vm = self
                var mainParent = $(this).parent('.toggle-btn');
                if( vm.all_cookies_allowed == true && $(mainParent).hasClass('active') ) {
                    vm.cookiePerformanceDatapush_opt_out()
                    self.Performance = 'false'
                    $(mainParent).removeClass('active');
                    $('.round-btn').html(
                        `<div></div>`
                    );
                    $('.status-1').html(`<div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Off</div>`);
                } else if( vm.all_cookies_allowed == true && !$(mainParent).hasClass('active') ) {
                    vm.cookiePerformanceDatapush_opt_in()
                    self.Performance = 'true'
                    $(mainParent).addClass('active');
                    $('.round-btn').html(`<svg style="vertical-align: super;" width="24" height="24" viewBox="0 0 32 32">
                        <path d="m8 17.2337322 4.2303003 4.7662678 11.7696997-12" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                        </svg>`);
                    $('.status-1').html(`<div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">On</div>`);
                    $(this).attr('checked');
                } 
            });
            $('.cb-value-2').click(function() {
                var vm = self
                var mainParent = $(this).parent('.toggle-btn-2');
                if( vm.all_cookies_allowed == true && $(mainParent).hasClass('active')) {
                    vm.cookieTrackingDatapush_opt_out()
                    self.Tracking = 'false'
                    $(mainParent).removeClass('active');
                    $(this).removeAttr('checked');
                    $('.round-btn-2').html(
                        `<div></div>`
                    );
                    $('.status-2').html(`<div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">Off</div>`);
                } else if( vm.all_cookies_allowed == true && !$(mainParent).hasClass('active')) {
                    vm.cookieTrackingDatapush_opt_in()
                    self.Tracking = 'true'
                    $(mainParent).addClass('active');
                    $('.round-btn-2').html(`<svg style="vertical-align: super;" width="24" height="24" viewBox="0 0 32 32">
                        <path d="m8 17.2337322 4.2303003 4.7662678 11.7696997-12" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"></path>
                        </svg>`);
                    $('.status-2').html(`<div style="font-size: 14px;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">On</div>`);
                    $(this).attr('checked');
                }
            });
        });
        document.getElementById('set-cookie').addEventListener('click', function() {
            function checkCookiePerformanceValue(){
                var exp = (new Date(Date.now()+ 86400*90000)).toUTCString();
                if(self.Performance == 'true'){
                    document.cookie = 'Performance=true;expires='+exp+'; path=/';
                } else if(self.Performance == 'false'){
                    document.cookie = 'Performance=false;expires='+exp+'; path=/';
                } else {
                    return false
                }
            }
            function checkCookieTrackingValue(){
                var exp = (new Date(Date.now()+ 86400*90000)).toUTCString();
                if(self.Tracking == 'true'){
                    document.cookie = 'Tracking=true;expires='+exp+'; path=/';
                } else if(self.Tracking == 'false'){
                    document.cookie = 'Tracking=false;expires='+exp+'; path=/';
                } else {
                    return false
                }
            }
            
            checkCookiePerformanceValue();
            checkCookieTrackingValue();
            self.aceptarButtonDataPush()
            window.location.href="/";
        });
    }
});

window.VueEvent = new Vue();
new Vue({
    'el': '#root'
});