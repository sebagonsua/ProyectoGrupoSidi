(function () {
    "use strict";

    var STORAGE_KEY = "sidi-lang";
    var DEFAULT_LANG = "es";

    var dictionaries = {
        es: {
            meta_title: "Grupo SIDI | Soluciones Industriales de Alto Impacto en Uruguay",
            meta_description: "Grupo SIDI: mantenimiento industrial, montaje de calderas, cintas transportadoras, estructuras y cañerías para la industria uruguaya, las 24 horas.",
            skip_link: "Saltar al contenido",
            aria_whatsapp: "Contactar por WhatsApp",
            aria_nav_toggle: "Abrir menú de navegación",
            nav_quienes: "Quiénes somos",
            nav_servicios: "Servicios",
            nav_integrantes: "Integrantes",
            nav_clientes: "Clientes",
            nav_contacto: "Contacto",
            hero_h1: "Soluciones industriales de alto impacto",
            hero_subtitle: "Mantenimiento y emergencias industriales, las 24 horas, sin detener la producción de tu planta.",
            hero_cta: "Contactanos",
            tag_quienes: "NUESTRA EMPRESA",
            tag_servicios: "LO QUE HACEMOS",
            tag_integrantes: "EQUIPO CALIFICADO",
            tag_clientes: "NUESTRA TRAYECTORIA",
            tag_contacto: "HABLEMOS",
            trust_1: "Proveedores del Estado uruguayo",
            trust_2: "Disponibilidad 24/7",
            trust_3: "Sin detener tu producción",
            trust_4: "Seguridad e innovación",
            quienes_h2_1: "QUIENES",
            quienes_h2_2: " SOMOS",
            quienes_p: "Nos exhibimos como una empresa con trayectoria siendo proveedores del Estado uruguayo. Brindamos nuestros servicios a proyectos de la industria y nos caracterizamos por trabajar las 24 horas del día para satisfacer las demandas específicas de nuestros clientes, sin interferir en el funcionamiento cotidiano de la planta.",
            principio_1: "Responsabilidad",
            principio_2: "Compromiso",
            principio_3: "Puntualidad",
            principio_4: "Seguridad",
            principio_5: "Innovación",
            principio_6: "Honestidad",
            principio_7: "Respeto",
            principio_8: "Valoración del equipo",
            aria_carousel_prev: "Foto anterior",
            aria_carousel_next: "Foto siguiente",
            servicios_h2_1: "NUESTROS",
            servicios_h2_2: " SERVICIOS",
            servicios_li_1: "Brindamos asistencia de emergencias industriales de operación y mantenimiento, sin detener la producción de la planta",
            servicios_li_2: "Reparación y montajes de calderas industriales",
            servicios_li_3: "Montaje de cintas transportadoras",
            servicios_li_4: "Montaje y fabricación de estructuras",
            servicios_li_5: "Montaje y fabricación de cañerías en general",
            servicios_li_6: "Reparación de pérdidas de fluidos en general: agua, gases, aceites, químicos",
            servicios_li_7: "Automatismos en su totalidad",
            servicios_li_8: "Control de tanques, caudales, bombas, entre otros",
            servicios_li_9: "Monitoreo personalizado y a distancia, a través de nuestro software para smartphones",
            video_fallback: "Tu navegador no admite la reproducción de este video.",
            integrantes_h2_1: "NUESTROS",
            integrantes_h2_2: " INTEGRANTES",
            integrantes_p: "Contamos con personal altamente calificado y cuidadosamente seleccionado, apto para trabajar con las nuevas tecnologías en soluciones industriales.",
            integrantes_btn: "CONTACTANOS",
            clientes_h2_1: "NUESTROS",
            clientes_h2_2: " CLIENTES",
            clientes_p: "Tenemos el agrado de haber colaborado con prestigiosas empresas de la industria uruguaya.",
            contacto_h2_1: "ENVIANOS UN",
            contacto_h2_2: " CORREO",
            form_label_nombre: "Nombre",
            form_label_correo: "Correo",
            form_label_telefono: "Teléfono",
            form_label_mensaje: "Mensaje",
            form_btn_enviar: "ENVIAR",
            form_msg_sending: "Enviando...",
            form_msg_ok: "¡Tu mensaje se envió correctamente! Te responderemos a la brevedad.",
            form_msg_error: "No se pudo enviar el mensaje. Intentá nuevamente o escribinos por WhatsApp.",
            form_msg_required: "Completá los campos obligatorios.",
            form_msg_invalid_email: "Ingresá un correo válido.",
            footer_copy: "Grupo SIDI. Todos los derechos reservados."
        },
        en: {
            meta_title: "Grupo SIDI | High-Impact Industrial Solutions in Uruguay",
            meta_description: "Grupo SIDI: industrial maintenance, boiler assembly, conveyor belts, structures and piping for Uruguayan industry, 24 hours a day.",
            skip_link: "Skip to content",
            aria_whatsapp: "Contact us on WhatsApp",
            aria_nav_toggle: "Open navigation menu",
            nav_quienes: "About us",
            nav_servicios: "Services",
            nav_integrantes: "Our team",
            nav_clientes: "Clients",
            nav_contacto: "Contact",
            hero_h1: "High-impact industrial solutions",
            hero_subtitle: "24/7 industrial maintenance and emergency response, without stopping your plant's production.",
            hero_cta: "Contact us",
            tag_quienes: "OUR COMPANY",
            tag_servicios: "WHAT WE DO",
            tag_integrantes: "QUALIFIED STAFF",
            tag_clientes: "OUR TRACK RECORD",
            tag_contacto: "LET'S TALK",
            trust_1: "Suppliers to the Uruguayan State",
            trust_2: "24/7 availability",
            trust_3: "Without stopping your production",
            trust_4: "Safety and innovation",
            quienes_h2_1: "ABOUT",
            quienes_h2_2: " US",
            quienes_p: "We are an established company and supplier to the Uruguayan State. We provide services to industrial projects and pride ourselves on working around the clock to meet our clients' specific needs, without disrupting daily plant operations.",
            principio_1: "Responsibility",
            principio_2: "Commitment",
            principio_3: "Punctuality",
            principio_4: "Safety",
            principio_5: "Innovation",
            principio_6: "Honesty",
            principio_7: "Respect",
            principio_8: "Team appreciation",
            aria_carousel_prev: "Previous photo",
            aria_carousel_next: "Next photo",
            servicios_h2_1: "OUR",
            servicios_h2_2: " SERVICES",
            servicios_li_1: "We provide industrial operation and maintenance emergency assistance without stopping plant production",
            servicios_li_2: "Repair and assembly of industrial boilers",
            servicios_li_3: "Conveyor belt assembly",
            servicios_li_4: "Structure assembly and manufacturing",
            servicios_li_5: "General piping assembly and manufacturing",
            servicios_li_6: "Repair of fluid leaks in general: water, gases, oils, chemicals",
            servicios_li_7: "Full automation systems",
            servicios_li_8: "Control of tanks, flow rates, pumps, and more",
            servicios_li_9: "Personalized remote monitoring through our smartphone software",
            video_fallback: "Your browser does not support video playback.",
            integrantes_h2_1: "OUR",
            integrantes_h2_2: " TEAM",
            integrantes_p: "We have highly qualified, carefully selected staff, ready to work with new technologies in industrial solutions.",
            integrantes_btn: "CONTACT US",
            clientes_h2_1: "OUR",
            clientes_h2_2: " CLIENTS",
            clientes_p: "We are proud to have collaborated with prestigious companies across Uruguayan industry.",
            contacto_h2_1: "SEND US AN",
            contacto_h2_2: " EMAIL",
            form_label_nombre: "Name",
            form_label_correo: "Email",
            form_label_telefono: "Phone",
            form_label_mensaje: "Message",
            form_btn_enviar: "SEND",
            form_msg_sending: "Sending...",
            form_msg_ok: "Your message was sent successfully! We'll get back to you shortly.",
            form_msg_error: "We couldn't send your message. Please try again or reach us on WhatsApp.",
            form_msg_required: "Please fill in the required fields.",
            form_msg_invalid_email: "Please enter a valid email.",
            footer_copy: "Grupo SIDI. All rights reserved."
        }
    };

    function getStoredLang() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function setStoredLang(lang) {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (e) {
            /* localStorage no disponible (modo privado, navegador antiguo, etc.) */
        }
    }

    function getDictionary(lang) {
        return dictionaries[lang] || dictionaries[DEFAULT_LANG];
    }

    function applyLanguage(lang) {
        var dict = getDictionary(lang);

        document.querySelectorAll("[data-i18n]").forEach(function (el) {
            var key = el.getAttribute("data-i18n");
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-content");
            if (dict[key] !== undefined) {
                el.setAttribute("content", dict[key]);
            }
        });

        document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
            var key = el.getAttribute("data-i18n-aria-label");
            if (dict[key] !== undefined) {
                el.setAttribute("aria-label", dict[key]);
            }
        });

        document.documentElement.lang = lang;

        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
        });
    }

    function initLangToggle() {
        document.querySelectorAll(".lang-btn").forEach(function (btn) {
            btn.addEventListener("click", function () {
                var lang = btn.dataset.lang;
                setStoredLang(lang);
                applyLanguage(lang);
            });
        });
    }

    document.addEventListener("DOMContentLoaded", function () {
        var lang = getStoredLang() || DEFAULT_LANG;
        applyLanguage(lang);
        initLangToggle();
    });

    window.sidiI18n = {
        t: function (key) {
            var lang = document.documentElement.lang || DEFAULT_LANG;
            var dict = getDictionary(lang);
            return dict[key] !== undefined ? dict[key] : key;
        }
    };
})();
