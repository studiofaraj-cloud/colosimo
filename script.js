// ================================================
// COLOSIMO PEINTURE - Main JavaScript
// ================================================

// === TRANSLATIONS ===
const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            gallery: "Galerie",
            faq: "FAQ",
            contact: "Contact"
        },
        cta: {
            quote: "Devis gratuit",
            free_quote: "Demander un devis gratuit",
            discover: "Découvrir nos services",
            all_services: "Voir tous nos services",
            view_gallery: "Voir toute la galerie",
            contact_us: "Nous contacter",
            hours: "Horaires: 7:30 - 18:00"
        },
        hero: {
            label: "Excellence en peinture depuis 2004",
            title: "Votre Expert en Peinture,\nPapier Peint & Gypserie",
            subtitle: "Plus de 20 ans d'expérience et 75+ projets réalisés avec précision.\nDes matériaux de qualité, des prix compétitifs, et une garantie sur tous nos travaux.",
            scroll: "Défiler",
            trust: {
                certified: "Matrice fédérale",
                experience: "20 ans d'expérience",
                projects: "75+ projets"
            }
        },
        whyus: {
            label: "Nos engagements",
            title: "Pourquoi nous choisir ?",
            subtitle: "Une expertise reconnue au service de votre projet",
            precision: {
                title: "Précision d'expert",
                text: "Chaque détail compte. Notre équipe assure une finition impeccable sur tous vos projets de peinture et décoration."
            },
            experience: {
                title: "20 ans d'expérience",
                text: "Deux décennies d'excellence dans le domaine de la peinture, du papier peint et de la gypserie à Genève."
            },
            materials: {
                title: "Matériaux de qualité",
                text: "Nous sélectionnons uniquement des peintures et matériaux haut de gamme pour garantir durabilité et esthétique."
            },
            price: {
                title: "Prix compétitifs",
                text: "Des tarifs transparents et équitables sans compromis sur la qualité. Devis gratuit sous 48h."
            }
        },
        stats: {
            projects: "Projets réalisés",
            years: "Ans d'expérience",
            team: "Professionnels",
            satisfaction: "Satisfaction client"
        },
        services: {
            label: "Notre expertise",
            title: "Nos services",
            subtitle: "Solutions complètes pour tous vos besoins en peinture et décoration",
            learn_more: "En savoir plus →",
            internal: {
                title: "Peinture interne",
                desc: "Transformation d'intérieurs pour appartements, villas et bureaux avec finitions parfaites."
            },
            external: {
                title: "Peinture externe",
                desc: "Protection et embellissement de façades avec des peintures résistantes aux intempéries."
            },
            wallpaper: {
                title: "Papier peint",
                desc: "Pose professionnelle de papier peint pour créer des ambiances uniques et élégantes."
            },
            decoration: {
                title: "Décorations",
                desc: "Techniques décoratives raffinées : stucco, trompe-l'œil, effets de matière et finitions artistiques."
            },
            plaster: {
                title: "Gypserie & Plâtrerie",
                desc: "Travaux de plâtre, lissage de murs et préparation de surfaces pour une base parfaite."
            },
            special: {
                title: "Peintures spéciales",
                desc: "Traitements antimoisissure, vernissage, restauration et finitions techniques sur-mesure."
            }
        },
        gallery: {
            label: "Nos réalisations",
            title: "Avant / Après",
            subtitle: "Découvrez la transformation de nos projets",
            example1: "Rénovation appartement - Genève",
            filter: {
                all: "Tous les projets",
                appartement: "Appartements",
                villa: "Villas",
                bureau: "Bureaux",
                commerce: "Commerces"
            }
        },
        gallery_cards: {
            renovation_apartment: {
                title: "Rénovation Appartement",
                category: "Genève | Appartement",
                desc: "Peinture complète 4 pièces avec papier peint salon"
            },
            facade_renovee: {
                title: "Façade Rénovée",
                category: "Genève | Extérieur",
                desc: "Peinture externe haute performance"
            },
            espace_commercial: {
                title: "ONU — Salle des Assemblées",
                category: "Genève | Institutionnel",
                desc: "Rénovation de la Salle actuelle de l'ONU à Genève"
            },
            tpg_tram: {
                title: "TPG — Tram Genève",
                category: "Genève | Transport",
                desc: "Décoration créative du Tram TPG à Genève"
            },
            salon_elegant: {
                title: "Salon Élégant",
                category: "Genève | Salon",
                desc: "Mise à jour intérieure avec finitions premium"
            }
        },
        trusted: {
            label: "Ils nous ont fait confiance",
            onu_name: "Nations Unies — Genève",
            onu_desc: "Rénovation de la Salle des Assemblées",
            tpg_name: "TPG — Transports Publics Genevois",
            tpg_desc: "Décoration créative du Tram de Genève"
        },
        testimonials: {
            label: "Témoignages",
            title: "Ce que disent nos clients",
            subtitle: "La confiance de nos clients à Genève depuis plus de 20 ans",
            test1: {
                text: "Travail impeccable et équipe très professionnelle. Notre appartement a été transformé au-delà de nos attentes. Je recommande vivement COLOSIMO SERVICE.",
                name: "Marie D.",
                location: "Genève",
                service: "Peinture intérieure"
            },
            test2: {
                text: "Excellent rapport qualité-prix. Le chantier était propre chaque soir et terminé dans les délais promis. Une équipe sérieuse et compétente.",
                name: "Pierre L.",
                location: "Lausanne",
                service: "Peinture extérieure"
            },
            test3: {
                text: "Travail de précision pour la restauration de notre villa ancienne. L'expertise de l'équipe COLOSIMO a fait toute la différence. Résultat magnifique !",
                name: "Sophie M.",
                location: "Montreux",
                service: "Rénovation villa"
            },
            test4: {
                text: "La pose de papier peint dans notre salon est absolument parfaite. Aucune bulle, aucun défaut. Un travail d'artisan qui se voit au premier coup d'oeil.",
                name: "Jean-Marc B.",
                location: "Nyon",
                service: "Papier peint"
            },
            test5: {
                text: "Notre façade avait besoin d'un rafraîchissement complet. L'équipe COLOSIMO a su choisir les couleurs idéales et le résultat est spectaculaire. Nos voisins sont impressionnés !",
                name: "Catherine R.",
                location: "Vevey",
                service: "Peinture extérieure"
            },
            test6: {
                text: "Les effets décoratifs réalisés dans notre restaurant sont d'une beauté exceptionnelle. Les clients nous complimentent tous les jours. Merci à toute l'équipe !",
                name: "Antoine V.",
                location: "Genève",
                service: "Décoration artistique"
            },
            test7: {
                text: "Nous avons fait appel à COLOSIMO pour repeindre tout notre bureau. Travail soigné, respect des horaires et propreté irréprochable. Professionnalisme exemplaire.",
                name: "Isabelle F.",
                location: "Morges",
                service: "Peinture intérieure"
            },
            test8: {
                text: "Le trompe-l'oeil réalisé dans notre entrée est une véritable oeuvre d'art. Chaque visiteur s'arrête pour l'admirer. Un talent rare et un service haut de gamme.",
                name: "François G.",
                location: "Lausanne",
                service: "Décoration artistique"
            },
            test9: {
                text: "Après avoir comparé plusieurs devis, nous avons choisi COLOSIMO et nous ne le regrettons pas. Le meilleur rapport qualité-prix de la région avec un résultat impeccable.",
                name: "Laurent P.",
                location: "Sion",
                service: "Peinture intérieure"
            },
            test10: {
                text: "La rénovation complète de notre chalet a été gérée avec un professionnalisme remarquable. Du choix des teintes à la finition, tout était parfait. Bravo !",
                name: "Nathalie K.",
                location: "Crans-Montana",
                service: "Rénovation complète"
            }
        },
        "cta.strip": {
            title: "Prêt à transformer votre espace ?",
            subtitle: "Contactez-nous pour un devis gratuit et une visite de repérage"
        },
        footer: {
            description: "Expert en peinture, papier peint et gypserie depuis plus de 20 ans à Genève et dans le canton de Vaud.",
            cert: "✓ Matrice fédérale",
            guarantee: "✓ Garantie travaux",
            navigation: "Navigation",
            services: "Services",
            contact: "Contact",
            hours: "Lun-Ven: 7:30 - 18:00",
            rights: "Tous droits réservés.",
            privacy: "Privacy",
            cookies: "Cookies"
        },
        // Services page
        services_page: {
            label: "Notre expertise",
            title: "Nos Services",
            subtitle: "Solutions complètes en peinture, papier peint et gypserie pour tous vos projets",
            intro_text: "Fort de 20 ans d'expérience, nous vous accompagnons dans tous vos projets.",
            intro_bold1: "Devis gratuit",
            intro_bold2: "visite de repérage offerte",
            intro_and: "et",
            cta_quote: "Demander un devis",
            internal: {
                title: "Peinture Interne",
                subtitle: "Transformez vos espaces intérieurs avec des finitions impeccables.",
                description: "Notre service de peinture intérieure couvre appartements, villas, bureaux et commerces. Nous utilisons des peintures de haute qualité adaptées à chaque pièce.",
                types_title: "Types de projets",
                type1_label: "Appartements",
                type1_desc: "Rénovation complète ou partielle",
                type2_label: "Villas",
                type2_desc: "Grands espaces, hauteurs sous plafond",
                type3_label: "Bureaux",
                type3_desc: "Espaces professionnels",
                type4_label: "Commerces",
                type4_desc: "Aux couleurs de votre marque"
            },
            external: {
                title: "Peinture Externe",
                subtitle: "Protégez et embellissez vos façades avec des peintures résistantes.",
                description: "Peintures spécifiquement conçues pour l'extérieur, protection contre la pluie, le gel et les UV. Durabilité 8-12 ans garantie.",
                surfaces_title: "Types de surfaces",
                surface1_label: "Façades crépi",
                surface1_desc: "Rénovation et protection",
                surface2_label: "Bois",
                surface2_desc: "Traitement et peinture des bardages",
                surface3_label: "Métal",
                surface3_desc: "Peinture anticorrosion",
                surface4_label: "Balcons & terrasses",
                surface4_desc: "Protection et finition"
            },
            wallpaper: {
                title: "Pose de Papier Peint",
                subtitle: "Créez des ambiances uniques avec une pose professionnelle.",
                description: "Maîtrise de toutes les techniques: papiers traditionnels, panoramiques, textures 3D et vinyles. Raccords invisibles garantis.",
                types_title: "Types de papiers peints",
                type1_label: "Papier intissé",
                type1_desc: "Facile à poser, résistant",
                type2_label: "Vinyle",
                type2_desc: "Lavable, parfait pour cuisines et SDB",
                type3_label: "Panoramiques",
                type3_desc: "Décors XXL sur mesure",
                type4_label: "Texturés",
                type4_desc: "Relief 3D, fibres naturelles"
            },
            decoration: {
                title: "Décorations Artistiques",
                subtitle: "Techniques décoratives raffinées pour des intérieurs d'exception.",
                description: "Stucco vénitien, trompe-l'œil, patines, effets de matière, fresques murales. Chaque projet est unique et réalisé sur mesure.",
                types_title: "Types de décorations",
                type1_label: "Stucco vénitien",
                type1_desc: "Finitions en plâtre de luxe",
                type2_label: "Trompe-l'œil",
                type2_desc: "Illusions d'optique sur mesure",
                type3_label: "Patines & effets",
                type3_desc: "Vieillissement et textures",
                type4_label: "Fresques murales",
                type4_desc: "Décors peints à la main"
            },
            complementary: {
                title: "Services Complémentaires",
                service1_title: "Lissage des Murs",
                service1_desc: "Préparation parfaite de vos surfaces. Correction des défauts, comblement des fissures pour un support lisse.",
                service2_title: "Traitement Antimoisissure",
                service2_desc: "Solution durable contre l'humidité. Diagnostic, traitement fongicide et peintures spéciales anti-moisissure.",
                service3_title: "Peintures Spéciales",
                service3_desc: "Vernissage, lasures, peintures techniques pour tous vos besoins spécifiques de protection ou d'esthétique.",
                service4_title: "Restaurations",
                service4_desc: "Expertise en restauration de bâtiments anciens. Techniques traditionnelles et matériaux d'époque.",
                service5_title: "Gypserie & Plâtrerie",
                service5_desc: "Cloisons sèches, faux-plafonds, moulures décoratives. Base essentielle pour toute finition de qualité.",
                cta: "Demander un devis →"
            },
            included: {
                title: "Ce qui est inclus",
                item1_title: "Devis gratuit",
                item1_desc: "Estimation sous 48h",
                item2_title: "Visite offerte",
                item2_desc: "Repérage sur place",
                item3_title: "Nettoyage inclus",
                item3_desc: "Fin de chantier impeccable",
                item4_title: "Garantie travaux",
                item4_desc: "Tous travaux garantis"
            },
            cta: {
                title: "Un projet en tête ?",
                text: "Contactez-nous pour recevoir un devis personnalisé gratuit."
            },
            ask_quote: "Demander un devis"
        },
        // Gallery page
        gallery_page: {
            label: "Nos réalisations",
            title: "Galerie de Projets",
            subtitle: "Découvrez 75+ projets réalisés avec passion et précision à Genève et dans le canton de Vaud",
            filter_all: "Tous les projets",
            filter_apt: "Appartements",
            filter_villa: "Villas",
            filter_office: "Bureaux",
            filter_shop: "Commerces",
            projects_completed: "Plus de 75 projets réalisés",
            projects_text: "Chaque projet est unique et bénéficie de notre expertise de 20 ans. De la simple rénovation d'appartement aux chantiers complexes de villas et commerces.",
            discuss: "Discutez de votre projet"
        },
        // FAQ page
        faq_page: {
            label: "Questions fréquentes",
            title: "FAQ",
            subtitle: "Trouvez les réponses à vos questions sur nos services de peinture",
            q1: "Quels sont vos délais d'intervention ?",
            a1: "Nous nous efforçons d'intervenir dans un délai de 2 à 3 semaines après validation du devis. Pour les projets urgents, des délais plus courts peuvent être envisagés selon notre planning. La durée des travaux varie selon la surface et la complexité: généralement 2-5 jours pour un appartement standard, 1-2 semaines pour une villa.",
            q2: "Le devis est-il vraiment gratuit ?",
            a2: "Oui, absolument ! Nous offrons un devis détaillé gratuit et sans engagement pour tous nos services. Cela inclut également une visite de repérage sur place pour évaluer précisément l'état des surfaces et vous conseiller sur les meilleures solutions. Vous recevrez votre devis sous 48 heures après la visite.",
            q3: "Proposez-vous une garantie sur vos travaux ?",
            a3: "Tous nos travaux sont garantis 2 ans sur la main d'œuvre. Cette garantie couvre les défauts d'application et les problèmes liés à notre intervention. De plus, nous utilisons des peintures et matériaux de qualité qui bénéficient également des garanties fabricants. En cas de problème, nous intervenons rapidement pour trouver une solution.",
            q4: "Le nettoyage de fin de chantier est-il inclus ?",
            a4: "Oui, le nettoyage complet est toujours inclus dans nos prestations ! Nous nettoyons quotidiennement le chantier pendant les travaux et effectuons un nettoyage approfondi en fin d'intervention. Tous les protections sont retirées, les sols aspirés et lavés, et nous nous assurons que votre espace est parfaitement propre et prêt à être utilisé immédiatement.",
            q5: "Quels types de peintures utilisez-vous ?",
            a5: "Nous travaillons exclusivement avec des peintures professionnelles de haute qualité de marques reconnues. Selon vos besoins, nous proposons des peintures acryliques sans solvants pour l'intérieur, des peintures spéciales pour pièces humides, des peintures écologiques certifiées, et des peintures extérieures résistantes au climat suisse. Nous vous conseillons sur le meilleur choix selon votre projet et votre budget.",
            q6: "Intervenez-vous dans toute la région genevoise et vaudoise ?",
            a6: "Oui, nous intervenons principalement à Genève et dans le canton de Vaud. Notre bureau est situé au Grand-Saconnex (Genève), ce qui nous permet de couvrir efficacement Genève, Lausanne, Nyon, Montreux, Vevey et les environs. Pour les projets plus éloignés, nous organisons nos interventions pour optimiser les déplacements.",
            q7: "Comment protégez-vous les meubles pendant les travaux ?",
            a7: "La protection de votre mobilier est une priorité. Nous regroupons les meubles au centre des pièces et les recouvrons de bâches plastiques professionnelles. Les sols sont protégés avec des films de protection adaptés. Tous les interrupteurs, prises et luminaires sont soigneusement masqués. Pour les objets fragiles ou de valeur, nous recommandons de les mettre en sécurité avant notre intervention.",
            q8: "Dois-je être présent pendant les travaux ?",
            a8: "Votre présence n'est pas nécessaire pendant toute la durée des travaux. Une présence est recommandée au début pour nous remettre les clés et nous montrer les spécificités du lieu, puis à la fin pour la réception des travaux. Entre-temps, vous pouvez vaquer à vos occupations en toute tranquillité. Nous maintenons une communication régulière et vous tenons informé de l'avancement.",
            q9: "Peut-on habiter dans le logement pendant les travaux ?",
            a9: "C'est possible, mais cela dépend de l'ampleur des travaux. Pour une pièce isolée, vous pouvez tout à fait continuer à vivre dans le reste du logement. Pour une rénovation complète, nous organisons les travaux pièce par pièce pour minimiser la gêne. Les peintures que nous utilisons sont peu odorantes et sèchent rapidement. Nous vous conseillons sur la meilleure organisation selon votre situation.",
            q10: "Proposez-vous un service après-vente ?",
            a10: "Absolument ! Nous restons à votre disposition après la fin des travaux pour toute question ou préoccupation. Si vous constatez un défaut couvert par notre garantie, nous intervenons rapidement pour y remédier. Nous offrons également des conseils d'entretien pour préserver la beauté de vos peintures dans le temps. Votre satisfaction est notre priorité, même après la fin du chantier.",
            q11: "Fournissez-vous la peinture ou dois-je l'acheter ?",
            a11: "Nous fournissons généralement tous les matériaux (peinture, primaires, enduits) dans le cadre de notre prestation, ce qui est inclus dans le devis. Cela garantit l'utilisation de produits professionnels adaptés et optimise les quantités. Si vous souhaitez fournir vous-même la peinture, c'est possible, mais nous vous conseillons sur les spécifications techniques et quantités nécessaires pour éviter les mauvaises surprises.",
            q12: "Acceptez-vous les paiements échelonnés ?",
            a12: "Pour les projets d'envergure, nous proposons effectivement un paiement échelonné : un acompte à la signature du contrat (généralement 30%), un paiement intermédiaire à mi-parcours pour les gros chantiers, et le solde à la réception des travaux. Les modalités exactes sont définies dans le devis et adaptées à chaque projet. Nous acceptons les paiements par virement bancaire, TWINT ou espèces.",
            other_questions: "Vous avez d'autres questions ?",
            other_text: "Notre équipe est à votre disposition pour répondre à toutes vos questions et vous conseiller sur votre projet.",
            contact_us: "Nous contacter"
        },
        // Contact page
        contact: {
            label: "Contactez-nous",
            title: "Prêt à transformer votre espace ?",
            subtitle: "Contactez-nous pour un devis gratuit et une visite de repérage",
            address_label: "Adresse",
            phone_label: "Téléphone",
            email_label: "Email",
            hours_label: "Horaires",
            hours_days: "Lundi - Vendredi",
            hours_times: "7:30 - 18:00",
            zone_label: "Zone",
            open_badge: "Ouvert",
            closed_badge: "Fermé",
            cta_heading: "Devis gratuit en 48h",
            cta_sub: "Sans engagement · Visite sur place · Réponse rapide",
            or_quote: "Ou demander un devis direct"
        },
        contact_page: {
            label: "Contactez-nous",
            title: "Demandez votre Devis Gratuit",
            subtitle: "Nous vous répondons sous 48h avec une estimation détaillée et personnalisée",
            form_title: "Formulaire de Contact",
            form: {
                lastname: "Nom *",
                lastname_placeholder: "Votre nom",
                firstname: "Prénom *",
                firstname_placeholder: "Votre prénom",
                email: "Email *",
                email_placeholder: "votre@email.com",
                phone: "Téléphone *",
                phone_placeholder: "+41 78 123 45 67",
                project_type: "Type de projet *",
                project_type_select: "Sélectionnez un type de projet",
                project_internal: "Peinture interne",
                project_external: "Peinture externe",
                project_wallpaper: "Papier peint",
                project_decoration: "Décorations",
                project_smoothing: "Lissage des murs",
                project_antimold: "Traitement antimoisissure",
                project_special: "Peintures spéciales",
                project_restoration: "Restaurations",
                project_plaster: "Gypserie & Plâtrerie",
                project_other: "Autre",
            address: "Adresse du chantier",
            address_placeholder: "Rue et numéro, NPA Ville",
                message: "Décrivez votre projet *",
                message_placeholder: "Décrivez-nous votre projet en détail : surface approximative, état actuel, vos souhaits...",
            privacy_accept: "J'accepte la",
            privacy_link: "politique de confidentialité",
            privacy_text: "et consens au traitement de mes données personnelles.",
                submit: "Envoyer ma demande",
            response_time: "Réponse sous 48h • Devis gratuit • Sans engagement",
                success_title: "Merci pour votre demande !",
                success_message: "Votre message est en cours de traitement. Nous vous répondrons dans les plus brefs délais.",
                success_close: "Fermer"
            },
            info_title: "Informations de Contact",
            info: {
            address_label: "Adresse",
            phone_label: "Téléphone",
            email_label: "Email",
            hours_label: "Horaires",
                hours_days: "Lundi - Vendredi",
                hours_times: "7:30 - 18:00",
                social_label: "Suivez-nous"
            },
            zone: {
                title: "Zone d'intervention",
                description: "Nous intervenons principalement à Genève et dans le canton de Vaud (Lausanne, Nyon, Montreux, Vevey et environs).",
                geneva: "✓ Genève et communes voisines",
                lausanne: "✓ Lausanne et nord Vaud",
                montreux: "✓ Riviera vaudoise (Montreux, Vevey)"
            },
            map_title: "Notre Localisation"
        },
        // About page
        about_page: {
            label: "Qui sommes-nous",
            title: "À propos de COLOSIMO PEINTURE",
            subtitle: "20 ans d'excellence en peinture, papier peint et gypserie au service de Genève et du canton de Vaud",
            story_label: "Notre histoire",
            story_title: "Une passion devenue expertise",
            story_p1: "Tout a commenc\u00e9 par une passion. Apr\u00e8s 20 ans pass\u00e9s \u00e0 perfectionner l\u2019art de la peinture et de la d\u00e9coration \u00e0 Gen\u00e8ve, le fondateur de COLOSIMO PEINTURE a d\u00e9cid\u00e9 en 2024 de cr\u00e9er sa propre entreprise. L\u2019objectif \u00e9tait clair : proposer un service haut de gamme o\u00f9 le savoir-faire artisanal se conjugue aux techniques les plus modernes.",
            story_p2: "Aujourd\u2019hui, avec plus de 75 projets men\u00e9s \u00e0 bien \u2014 appartements, villas, bureaux, commerces \u2014 nous mettons toujours la m\u00eame exigence au c\u0153ur de notre travail. Pour nous, chaque chantier est unique et m\u00e9rite une attention sans faille, du premier coup de pinceau jusqu\u2019\u00e0 la finition.",
            story_p3: "Certifi\u00e9e par la Matrice f\u00e9d\u00e9rale, notre entreprise vous garantit un professionnalisme rigoureux et le respect total des normes suisses de qualit\u00e9.",
            local_label: "Présence locale",
            local_title: "Ancrés à Genève et actifs dans le canton de Vaud",
            local_p1: "Notre bureau situé au <strong>Route de Colovrex 7, 1218 Le Grand-Saconnex</strong>, nous permet de servir efficacement Genève, Lausanne, Nyon, Montreux, Vevey et les environs.",
            local_p2: "Cette proximité géographique nous permet d'offrir un service réactif et personnalisé, avec des visites de repérage gratuites et des interventions rapides.",
            local_zone_label: "Zone d'intervention",
            local_zone_value: "Genève et canton de Vaud",
            local_hours_label: "Horaires",
            local_hours_value: "Lun-Ven: 7:30 - 18:00",
            team_label: "Notre équipe",
            team_title: "Une équipe de professionnels dévoués",
            team_subtitle: "Quatre experts passionnés à votre service",
            team4_title: "Peintre professionnel",
            team4_role: "Spécialiste peinture intérieure & extérieure",
            team4_bio: "Expert en peinture résidentielle et commerciale. Excellence dans la finition et le respect des délais.",
            team1_title: "Fondateur & Directeur",
            team1_role: "Expert en peinture et décoration",
            team1_bio: "20 ans d'expérience dans le secteur. Spécialisé dans les finitions haut de gamme et la restauration.",
            team2_title: "Peintre décorateur",
            team2_role: "Spécialiste papier peint",
            team2_bio: "Expert en pose de papier peint et techniques décoratives. Précision et créativité au service de vos projets.",
            team3_title: "Plâtrier-gypsier",
            team3_role: "Spécialiste des supports",
            team3_bio: "Maîtrise parfaite de la préparation des surfaces et des travaux de plâtrerie pour des bases impeccables.",
            values_label: "Nos valeurs",
            values_title: "Ce qui nous guide",
            value1_title: "Précision",
            value1_desc: "Chaque trait de pinceau compte. Nous apportons un soin méticuleux à chaque détail pour garantir un résultat parfait.",
            value2_title: "Propreté",
            value2_desc: "Chantier propre et organisé. Nettoyage quotidien inclus et remise en état impeccable en fin de projet.",
            value3_title: "Respect des délais",
            value3_desc: "Planification rigoureuse et respect des engagements. Votre projet livré dans les temps convenus.",
            value4_title: "Qualité des matériaux",
            value4_desc: "Sélection exclusive de peintures et matériaux premium pour assurer durabilité et esthétique.",
            value5_title: "Transparence",
            value5_desc: "Communication claire, devis détaillés et conseils honnêtes pour vous aider à faire les meilleurs choix.",
            value6_title: "Professionnalisme",
            value6_desc: "Équipe qualifiée, assurée et certifiée. Conformité totale aux normes suisses de construction.",
            cert_label: "Certifications & garanties",
            cert_title: "Votre tranquillité d'esprit",
            cert1_title: "Matrice fédérale",
            cert1_desc: "Certification officielle garantissant notre conformité aux standards suisses de qualité et de professionnalisme.",
            cert2_title: "Garantie sur les travaux",
            cert2_desc: "Tous nos travaux sont garantis. Nous intervenons rapidement en cas de problème pour assurer votre satisfaction totale.",
            cert3_title: "Assurance responsabilité",
            cert3_desc: "Couverture complète pour tous nos chantiers. Votre bien est protégé pendant toute la durée des travaux.",
            timeline_label: "Notre parcours",
            timeline_title: "Jalons et réalisations",
            timeline1_title: "Début d'expérience",
            timeline1_desc: "Le fondateur débute sa carrière dans le secteur de la peinture et de la décoration à Genève.",
            timeline2_title: "Spécialisation",
            timeline2_desc: "Formation approfondie en techniques décoratives avancées et restauration de bâtiments historiques.",
            timeline3_title: "50+ projets",
            timeline3_desc: "Franchissement du cap des 50 projets réussis avec une réputation établie dans la région genevoise.",
            timeline4_title: "Création de COLOSIMO PEINTURE",
            timeline4_desc: "Fondation officielle de l'entreprise avec obtention de la Matrice fédérale. Constitution d'une équipe de 4 professionnels.",
            timeline5_title: "75+ projets réalisés",
            timeline5_desc: "Expansion continue avec une clientèle fidèle et des projets toujours plus ambitieux à travers la région genevoise.",
            cta_title: "Prêt à commencer votre projet ?",
            cta_text: "Contactez-nous pour un devis gratuit et découvrez comment nous pouvons transformer votre espace.",
            cta_quote: "Demander un devis",
            cta_services: "Voir nos services"
        },
        // Privacy page
        privacy_page: {
            label: "Informations légales",
            title: "Politique de Confidentialité & Cookies",
            subtitle: "Protection de vos données personnelles et utilisation des cookies",
            updated: "Dernière mise à jour :",
            questions: "Des questions sur vos données ?",
            questions_text: "Notre équipe est à votre disposition pour répondre à toutes vos questions.",
            back_home: "Retour à l'accueil"
        },
        // Cookie banner
        cookies: {
            title: "Nous utilisons des cookies",
            message: "Nous utilisons des cookies essentiels pour le bon fonctionnement de notre site et, avec votre consentement, des cookies pour améliorer votre expérience.",
            learn_more: "En savoir plus",
            accept_all: "Tout accepter",
            decline_all: "Tout refuser",
            customize: "Personnaliser",
            settings_title: "Paramètres des cookies",
            settings_subtitle: "Choisissez les cookies que vous souhaitez autoriser",
            necessary: "Cookies nécessaires",
            necessary_desc: "Ces cookies sont indispensables au fonctionnement du site.",
            preferences: "Cookies de préférences",
            preferences_desc: "Ces cookies permettent de mémoriser vos choix et préférences.",
            analytics: "Cookies analytiques",
            analytics_desc: "Ces cookies nous aident à comprendre comment vous utilisez notre site.",
            marketing: "Cookies marketing",
            marketing_desc: "Ces cookies permettent de vous proposer des contenus adaptés.",
            required: "Obligatoire",
            cancel: "Annuler",
            save: "Enregistrer"
        },
        quote_popup: {
            title: "Demandez votre devis gratuit",
            subtitle: "Réponse garantie sous 48h — Sans engagement"
        }
    },
    de: {
        nav: {
            home: "Startseite",
            about: "Über uns",
            services: "Dienstleistungen",
            gallery: "Galerie",
            faq: "FAQ",
            contact: "Kontakt"
        },
        cta: {
            quote: "Gratis Offerte",
            free_quote: "Kostenlose Offerte anfordern",
            discover: "Unsere Dienstleistungen",
            all_services: "Alle Dienstleistungen",
            view_gallery: "Galerie ansehen",
            contact_us: "Kontaktieren Sie uns",
            hours: "Öffnungszeiten: 7:30 - 18:00"
        },
        hero: {
            label: "Exzellenz im Malen seit 2004",
            title: "Ihr Experte für Malerei,\nTapeten & Gipserei",
            subtitle: "Über 20 Jahre Erfahrung und 75+ präzise durchgeführte Projekte.\nHochwertige Materialien, wettbewerbsfähige Preise und Garantie auf alle unsere Arbeiten.",
            scroll: "Scrollen",
            trust: {
                certified: "Bundesmatrix",
                experience: "20 Jahre Erfahrung",
                projects: "75+ Projekte"
            }
        },
        whyus: {
            label: "Unsere Verpflichtungen",
            title: "Warum uns wählen?",
            subtitle: "Anerkannte Expertise im Dienste Ihres Projekts",
            precision: {
                title: "Expertengenauigkeit",
                text: "Jedes Detail zählt. Unser Team garantiert ein einwandfreies Finish bei allen Ihren Mal- und Dekorationsprojekten."
            },
            experience: {
                title: "20 Jahre Erfahrung",
                text: "Zwei Jahrzehnte Exzellenz im Bereich Malerei, Tapeten und Gipserei in Genf."
            },
            materials: {
                title: "Hochwertige Materialien",
                text: "Wir wählen nur erstklassige Farben und Materialien aus, um Langlebigkeit und Ästhetik zu garantieren."
            },
            price: {
                title: "Wettbewerbsfähige Preise",
                text: "Transparente und faire Preise ohne Kompromisse bei der Qualität. Kostenlose Offerte innerhalb von 48 Stunden."
            }
        },
        stats: {
            projects: "Abgeschlossene Projekte",
            years: "Jahre Erfahrung",
            team: "Fachleute",
            satisfaction: "Kundenzufriedenheit"
        },
        services: {
            label: "Unsere Expertise",
            title: "Unsere Dienstleistungen",
            subtitle: "Komplette Lösungen für all Ihre Mal- und Dekorationsbedürfnisse",
            learn_more: "Mehr erfahren →",
            internal: {
                title: "Innenmalerei",
                desc: "Transformation von Innenräumen für Wohnungen, Villen und Büros mit perfekten Oberflächen."
            },
            external: {
                title: "Außenmalerei",
                desc: "Schutz und Verschönerung von Fassaden mit wetterbeständigen Farben."
            },
            wallpaper: {
                title: "Tapezieren",
                desc: "Professionelle Tapetenverlegung für einzigartige und elegante Atmosphären."
            },
            decoration: {
                title: "Dekorationen",
                desc: "Raffinierte Dekorationstechniken: Stuck, Trompe-l'oeil, Materialeffekte und künstlerische Oberflächen."
            },
            plaster: {
                title: "Gipserei & Verputzen",
                desc: "Gipsarbeiten, Wandglättung und Oberflächenvorbereitung für eine perfekte Basis."
            },
            special: {
                title: "Spezialfarben",
                desc: "Anti-Schimmel-Behandlungen, Lackierung, Restaurierung und maßgeschneiderte technische Oberflächen."
            }
        },
        gallery: {
            label: "Unsere Arbeiten",
            title: "Vorher / Nachher",
            subtitle: "Entdecken Sie die Verwandlung unserer Projekte",
            example1: "Wohnungsrenovierung - Genf",
            filter: {
                all: "Alle Projekte",
                appartement: "Wohnungen",
                villa: "Villen",
                bureau: "Büros",
                commerce: "Geschäfte"
            }
        },
        trusted: {
            label: "Sie haben uns vertraut",
            onu_name: "Vereinte Nationen — Genf",
            onu_desc: "Renovierung des Versammlungssaals",
            tpg_name: "TPG — Genfer Verkehrsbetriebe",
            tpg_desc: "Kreative Dekoration der Genfer Tram"
        },
        testimonials: {
            label: "Kundenstimmen",
            title: "Was unsere Kunden sagen",
            subtitle: "Das Vertrauen unserer Kunden in Genf seit über 20 Jahren",
            test1: {
                text: "Tadellose Arbeit und sehr professionelles Team. Unsere Wohnung wurde über unsere Erwartungen hinaus verwandelt. Ich empfehle COLOSIMO SERVICE wärmstens.",
                name: "Marie D.",
                location: "Genf",
                service: "Innenanstrich"
            },
            test2: {
                text: "Ausgezeichnetes Preis-Leistungs-Verhältnis. Die Baustelle war jeden Abend sauber und wurde termingerecht abgeschlossen. Ein seriöses und kompetentes Team.",
                name: "Pierre L.",
                location: "Lausanne",
                service: "Aussenanstrich"
            },
            test3: {
                text: "Präzisionsarbeit für die Restaurierung unserer alten Villa. Die Expertise des COLOSIMO-Teams hat den ganzen Unterschied gemacht. Wunderschönes Ergebnis!",
                name: "Sophie M.",
                location: "Montreux",
                service: "Villa-Renovierung"
            },
            test4: {
                text: "Die Tapezierung in unserem Wohnzimmer ist absolut perfekt. Keine Blasen, keine Mängel. Eine handwerkliche Arbeit, die auf den ersten Blick erkennbar ist.",
                name: "Jean-Marc B.",
                location: "Nyon",
                service: "Tapete"
            },
            test5: {
                text: "Unsere Fassade brauchte eine komplette Auffrischung. Das COLOSIMO-Team hat die idealen Farben gewählt und das Ergebnis ist spektakulär. Unsere Nachbarn sind beeindruckt!",
                name: "Catherine R.",
                location: "Vevey",
                service: "Aussenanstrich"
            },
            test6: {
                text: "Die dekorativen Effekte in unserem Restaurant sind von aussergewöhnlicher Schönheit. Die Gäste machen uns jeden Tag Komplimente. Danke an das gesamte Team!",
                name: "Antoine V.",
                location: "Genf",
                service: "Künstlerische Dekoration"
            },
            test7: {
                text: "Wir haben COLOSIMO beauftragt, unser gesamtes Büro neu zu streichen. Sorgfältige Arbeit, Einhaltung der Zeitpläne und tadellose Sauberkeit. Vorbildliche Professionalität.",
                name: "Isabelle F.",
                location: "Morges",
                service: "Innenanstrich"
            },
            test8: {
                text: "Das Trompe-l'oeil in unserem Eingangsbereich ist ein wahres Kunstwerk. Jeder Besucher bleibt stehen, um es zu bewundern. Ein seltenes Talent und ein erstklassiger Service.",
                name: "François G.",
                location: "Freiburg",
                service: "Künstlerische Dekoration"
            },
            test9: {
                text: "Nachdem wir mehrere Angebote verglichen haben, haben wir uns für COLOSIMO entschieden und bereuen es nicht. Das beste Preis-Leistungs-Verhältnis der Region mit einem tadellosen Ergebnis.",
                name: "Laurent P.",
                location: "Sitten",
                service: "Innenanstrich"
            },
            test10: {
                text: "Die Komplettrenovierung unseres Chalets wurde mit bemerkenswerter Professionalität durchgeführt. Von der Farbwahl bis zur Endfertigung war alles perfekt. Bravo!",
                name: "Nathalie K.",
                location: "Crans-Montana",
                service: "Komplettrenovierung"
            }
        },
        "cta.strip": {
            title: "Bereit, Ihren Raum zu verwandeln?",
            subtitle: "Kontaktieren Sie uns für eine kostenlose Offerte und eine Besichtigung"
        },
        footer: {
            description: "Experte für Malerei, Tapeten und Gipserei seit über 20 Jahren in Genf.",
            cert: "✓ Bundesmatrix",
            guarantee: "✓ Arbeitsgarantie",
            navigation: "Navigation",
            services: "Dienstleistungen",
            contact: "Kontakt",
            hours: "Mo-Fr: 7:30 - 18:00",
            rights: "Alle Rechte vorbehalten.",
            privacy: "Privacy",
            cookies: "Cookies"
        },
        services_page: {
            label: "Unsere Expertise",
            title: "Unsere Dienstleistungen",
            subtitle: "Komplette Lösungen für Malerei, Tapeten und Gipserei für all Ihre Projekte",
            intro_text: "Mit 20 Jahren Erfahrung begleiten wir Sie bei all Ihren Projekten.",
            intro_bold1: "Kostenlose Offerte",
            intro_bold2: "kostenlose Besichtigung",
            intro_and: "und",
            cta_quote: "Angebot anfordern",
            internal: {
                title: "Innenmalerei",
                subtitle: "Verwandeln Sie Ihre Innenräume mit makellosen Oberflächen.",
                description: "Unser Innenmalerei-Service umfasst Wohnungen, Villen, Büros und Geschäfte. Wir verwenden hochwertige Farben, die auf jeden Raum abgestimmt sind.",
                types_title: "Projektarten",
                type1_label: "Wohnungen",
                type1_desc: "Vollständige oder teilweise Renovierung",
                type2_label: "Villen",
                type2_desc: "Große Räume, hohe Decken",
                type3_label: "Büros",
                type3_desc: "Professionelle Räume",
                type4_label: "Geschäfte",
                type4_desc: "In den Farben Ihrer Marke"
            },
            external: {
                title: "Außenmalerei",
                subtitle: "Schützen und verschönern Sie Ihre Fassaden mit widerstandsfähigen Farben.",
                description: "Speziell für den Außenbereich entwickelte Farben, Schutz vor Regen, Frost und UV-Strahlung. Haltbarkeit 8-12 Jahre garantiert.",
                surfaces_title: "Oberflächentypen",
                surface1_label: "Verputzte Fassaden",
                surface1_desc: "Renovierung und Schutz",
                surface2_label: "Holz",
                surface2_desc: "Behandlung und Anstrich von Verschalungen",
                surface3_label: "Metall",
                surface3_desc: "Rostschutzfarbe",
                surface4_label: "Balkone & Terrassen",
                surface4_desc: "Schutz und Oberflächenbehandlung"
            },
            wallpaper: {
                title: "Tapetenverlegung",
                subtitle: "Schaffen Sie einzigartige Atmosphären mit professioneller Verlegung.",
                description: "Beherrschung aller Techniken: traditionelle Tapeten, Panorama-Tapeten, 3D-Texturen und Vinyl. Unsichtbare Nähte garantiert.",
                types_title: "Tapetenarten",
                type1_label: "Vlies",
                type1_desc: "Leicht zu verlegen, widerstandsfähig",
                type2_label: "Vinyl",
                type2_desc: "Waschbar, perfekt für Küchen und Bäder",
                type3_label: "Panorama",
                type3_desc: "XXL-Dekore nach Maß",
                type4_label: "Strukturiert",
                type4_desc: "3D-Relief, Naturfasern"
            },
            decoration: {
                title: "Künstlerische Dekorationen",
                subtitle: "Raffinierte Dekorationstechniken für außergewöhnliche Innenräume.",
                description: "Venetianischer Stuck, Trompe-l'œil, Patina, Materialeffekte, Wandfresken. Jedes Projekt ist einzigartig und maßgeschneidert.",
                types_title: "Dekorationstypen",
                type1_label: "Venetianischer Stuck",
                type1_desc: "Luxuriöse Gipsveredelungen",
                type2_label: "Trompe-l'œil",
                type2_desc: "Maßgeschneiderte optische Täuschungen",
                type3_label: "Patina & Effekte",
                type3_desc: "Alterung und Texturen",
                type4_label: "Wandfresken",
                type4_desc: "Handgemalte Dekore"
            },
            complementary: {
                title: "Zusätzliche Dienstleistungen",
                service1_title: "Wandglättung",
                service1_desc: "Perfekte Vorbereitung Ihrer Oberflächen. Korrektur von Mängeln, Füllen von Rissen für eine glatte Basis.",
                service2_title: "Schimmelbehandlung",
                service2_desc: "Dauerhafte Lösung gegen Feuchtigkeit. Diagnose, fungizide Behandlung und spezielle Anti-Schimmel-Farben.",
                service3_title: "Spezialfarben",
                service3_desc: "Lackierung, Lasur, technische Farben für alle Ihre spezifischen Schutz- oder Ästhetikbedürfnisse.",
                service4_title: "Restaurierungen",
                service4_desc: "Expertise bei der Restaurierung alter Gebäude. Traditionelle Techniken und historische Materialien.",
                service5_title: "Gipserei & Verputzung",
                service5_desc: "Trockenbauwände, abgehängte Decken, dekorative Leisten. Wesentliche Grundlage für jede hochwertige Oberfläche.",
                cta: "Angebot anfordern →"
            },
            included: {
                title: "Was enthalten ist",
                item1_title: "Kostenlose Offerte",
                item1_desc: "Schätzung innerhalb von 48h",
                item2_title: "Kostenlose Besichtigung",
                item2_desc: "Vor-Ort-Besichtigung",
                item3_title: "Reinigung inklusive",
                item3_desc: "Makellose Baustellenreinigung",
                item4_title: "Arbeitsgarantie",
                item4_desc: "Alle Arbeiten garantiert"
            },
            cta: {
                title: "Ein Projekt im Kopf?",
                text: "Kontaktieren Sie uns für ein kostenloses, personalisiertes Angebot."
            },
            ask_quote: "Angebot anfordern"
        },
        gallery_page: {
            label: "Unsere Arbeiten",
            title: "Projekt-Galerie",
            subtitle: "Entdecken Sie 75+ Projekte, die mit Leidenschaft und Präzision in Genf realisiert wurden",
            filter_all: "Alle Projekte",
            filter_apt: "Wohnungen",
            filter_villa: "Villen",
            filter_office: "Büros",
            filter_shop: "Geschäfte",
            projects_completed: "Über 75 abgeschlossene Projekte",
            projects_text: "Jedes Projekt ist einzigartig und profitiert von unserer 20-jährigen Expertise. Von der einfachen Wohnungsrenovierung bis zu komplexen Villen- und Geschäftsprojekten.",
            discuss: "Besprechen Sie Ihr Projekt"
        },
        faq_page: {
            label: "Häufig gestellte Fragen",
            title: "FAQ",
            subtitle: "Finden Sie Antworten auf Ihre Fragen zu unseren Malerdienstleistungen",
            q1: "Wie sind Ihre Interventionszeiten?",
            a1: "Wir bemühen uns, innerhalb von 2 bis 3 Wochen nach Bestätigung des Angebots zu intervenieren. Für dringende Projekte können kürzere Fristen je nach unserem Zeitplan in Betracht gezogen werden. Die Dauer der Arbeiten variiert je nach Fläche und Komplexität: in der Regel 2-5 Tage für eine Standardwohnung, 1-2 Wochen für eine Villa.",
            q2: "Ist das Angebot wirklich kostenlos?",
            a2: "Ja, absolut! Wir bieten ein detailliertes, kostenloses und unverbindliches Angebot für alle unsere Dienstleistungen an. Dies umfasst auch eine Vor-Ort-Besichtigung, um den Zustand der Oberflächen genau zu beurteilen und Sie über die besten Lösungen zu beraten. Sie erhalten Ihr Angebot innerhalb von 48 Stunden nach der Besichtigung.",
            q3: "Bieten Sie eine Garantie auf Ihre Arbeiten?",
            a3: "Alle unsere Arbeiten sind 2 Jahre auf die Arbeitsleistung garantiert. Diese Garantie deckt Anwendungsfehler und Probleme im Zusammenhang mit unserem Eingreifen ab. Darüber hinaus verwenden wir hochwertige Farben und Materialien, die auch von den Herstellergarantien profitieren. Bei Problemen greifen wir schnell ein, um eine Lösung zu finden.",
            q4: "Ist die Endreinigung der Baustelle enthalten?",
            a4: "Ja, die vollständige Reinigung ist immer in unseren Leistungen enthalten! Wir reinigen die Baustelle täglich während der Arbeiten und führen am Ende des Eingriffs eine gründliche Reinigung durch. Alle Schutzmaßnahmen werden entfernt, Böden gesaugt und gewaschen, und wir stellen sicher, dass Ihr Raum perfekt sauber und sofort einsatzbereit ist.",
            q5: "Welche Arten von Farben verwenden Sie?",
            a5: "Wir arbeiten ausschließlich mit hochwertigen professionellen Farben anerkannter Marken. Je nach Ihren Bedürfnissen bieten wir lösungsmittelfreie Acrylfarben für den Innenbereich, Spezialfarben für feuchte Räume, zertifizierte ökologische Farben und wetterbeständige Außenfarben für das Schweizer Klima an. Wir beraten Sie über die beste Wahl je nach Ihrem Projekt und Budget.",
            q6: "Sind Sie in der gesamten Region Genf tätig?",
            a6: "Ja, wir sind hauptsächlich in Genf und der gesamten Genfer Region tätig. Unser Büro befindet sich in Le Grand-Saconnex (Genf), was es uns ermöglicht, die gesamte Region effizient abzudecken. Für weiter entfernte Projekte organisieren wir unsere Interventionen, um die Fahrten zu optimieren.",
            q7: "Wie schützen Sie Möbel während der Arbeiten?",
            a7: "Der Schutz Ihrer Möbel hat Priorität. Wir gruppieren die Möbel in der Mitte der Räume und decken sie mit professionellen Kunststoffplanen ab. Die Böden sind mit geeigneten Schutzfolien geschützt. Alle Schalter, Steckdosen und Leuchten werden sorgfältig abgedeckt. Für zerbrechliche oder wertvolle Gegenstände empfehlen wir, sie vor unserem Eingreifen in Sicherheit zu bringen.",
            q8: "Muss ich während der Arbeiten anwesend sein?",
            a8: "Ihre Anwesenheit ist während der gesamten Dauer der Arbeiten nicht erforderlich. Eine Anwesenheit wird zu Beginn empfohlen, um uns die Schlüssel zu übergeben und uns die Besonderheiten des Ortes zu zeigen, und dann am Ende für die Abnahme der Arbeiten. In der Zwischenzeit können Sie Ihren Geschäften in aller Ruhe nachgehen. Wir halten regelmäßige Kommunikation aufrecht und halten Sie über den Fortschritt auf dem Laufenden.",
            q9: "Kann man während der Arbeiten in der Wohnung wohnen?",
            a9: "Es ist möglich, hängt aber vom Umfang der Arbeiten ab. Für einen isolierten Raum können Sie durchaus im Rest der Wohnung weiterleben. Für eine vollständige Renovierung organisieren wir die Arbeiten Raum für Raum, um die Störung zu minimieren. Die von uns verwendeten Farben sind geruchsarm und trocknen schnell. Wir beraten Sie über die beste Organisation je nach Ihrer Situation.",
            q10: "Bieten Sie einen After-Sales-Service?",
            a10: "Absolut! Wir stehen Ihnen nach Abschluss der Arbeiten für alle Fragen oder Bedenken zur Verfügung. Wenn Sie einen Mangel feststellen, der von unserer Garantie abgedeckt ist, greifen wir schnell ein, um ihn zu beheben. Wir bieten auch Wartungstipps an, um die Schönheit Ihrer Farben im Laufe der Zeit zu erhalten. Ihre Zufriedenheit ist unsere Priorität, auch nach Abschluss der Baustelle.",
            q11: "Stellen Sie die Farbe zur Verfügung oder muss ich sie kaufen?",
            a11: "Wir liefern in der Regel alle Materialien (Farbe, Grundierungen, Putze) im Rahmen unserer Leistung, die im Angebot enthalten ist. Dies gewährleistet die Verwendung geeigneter professioneller Produkte und optimiert die Mengen. Wenn Sie die Farbe selbst liefern möchten, ist dies möglich, aber wir beraten Sie über die technischen Spezifikationen und benötigten Mengen, um böse Überraschungen zu vermeiden.",
            q12: "Akzeptieren Sie Ratenzahlungen?",
            a12: "Für umfangreiche Projekte bieten wir tatsächlich eine Ratenzahlung an: eine Anzahlung bei Vertragsunterzeichnung (in der Regel 30%), eine Zwischenzahlung auf halbem Weg für große Baustellen und den Restbetrag bei Abnahme der Arbeiten. Die genauen Modalitäten sind im Angebot definiert und an jedes Projekt angepasst. Wir akzeptieren Zahlungen per Banküberweisung, TWINT oder bar.",
            other_questions: "Haben Sie weitere Fragen?",
            other_text: "Unser Team steht Ihnen zur Verfügung, um alle Ihre Fragen zu beantworten und Sie zu Ihrem Projekt zu beraten.",
            contact_us: "Kontaktieren Sie uns"
        },
        contact: {
            label: "Kontaktieren Sie uns",
            title: "Bereit, Ihren Raum zu verwandeln?",
            subtitle: "Kontaktieren Sie uns für ein kostenloses Angebot und eine Besichtigung",
            address_label: "Adresse",
            phone_label: "Telefon",
            email_label: "E-Mail",
            hours_label: "Öffnungszeiten",
            hours_days: "Montag - Freitag",
            hours_times: "7:30 - 18:00",
            zone_label: "Zone",
            open_badge: "Geöffnet",
            closed_badge: "Geschlossen",
            cta_heading: "Kostenloses Angebot in 48h",
            cta_sub: "Unverbindlich · Vor-Ort-Besuch · Schnelle Antwort",
            or_quote: "Oder direkt ein Angebot anfordern"
        },
        contact_page: {
            label: "Kontaktieren Sie uns",
            title: "Fordern Sie Ihre kostenlose Offerte an",
            subtitle: "Wir antworten Ihnen innerhalb von 48 Stunden mit einer detaillierten und personalisierten Schätzung",
            form_title: "Kontaktformular",
            form: {
                lastname: "Name *",
                lastname_placeholder: "Ihr Name",
                firstname: "Vorname *",
                firstname_placeholder: "Ihr Vorname",
                email: "E-Mail *",
                email_placeholder: "ihre@email.com",
                phone: "Telefon *",
                phone_placeholder: "+41 78 123 45 67",
                project_type: "Projektart *",
                project_type_select: "Wählen Sie eine Projektart",
                project_internal: "Innenmalerei",
                project_external: "Außenmalerei",
                project_wallpaper: "Tapeten",
                project_decoration: "Dekorationen",
                project_smoothing: "Wandglättung",
                project_antimold: "Schimmelbehandlung",
                project_special: "Spezialfarben",
                project_restoration: "Restaurierungen",
                project_plaster: "Gipserei & Verputzung",
                project_other: "Andere",
            address: "Baustellenadresse",
            address_placeholder: "Straße und Nummer, PLZ Stadt",
                message: "Beschreiben Sie Ihr Projekt *",
                message_placeholder: "Beschreiben Sie uns Ihr Projekt im Detail: ungefähre Fläche, aktueller Zustand, Ihre Wünsche...",
            privacy_accept: "Ich akzeptiere die",
            privacy_link: "Datenschutzerklärung",
            privacy_text: "und stimme der Verarbeitung meiner persönlichen Daten zu.",
                submit: "Anfrage senden",
            response_time: "Antwort innerhalb 48h • Kostenlose Offerte • Unverbindlich",
                success_title: "Vielen Dank für Ihre Anfrage!",
                success_message: "Ihre Nachricht wird bearbeitet. Wir werden Ihnen so schnell wie möglich antworten.",
                success_close: "Schließen"
            },
            info_title: "Kontaktinformationen",
            info: {
            address_label: "Adresse",
            phone_label: "Telefon",
            email_label: "E-Mail",
            hours_label: "Öffnungszeiten",
                hours_days: "Montag - Freitag",
                hours_times: "7:30 - 18:00",
                social_label: "Folgen Sie uns"
            },
            zone: {
                title: "Einsatzgebiet",
                description: "Wir sind hauptsächlich in Genf und im Kanton Waadt (Lausanne, Nyon, Montreux, Vevey und Umgebung) tätig.",
                geneva: "✓ Genf und Nachbargemeinden",
                lausanne: "✓ Lausanne und Nord-Waadt",
                montreux: "✓ Waadtländer Riviera (Montreux, Vevey)"
            },
            map_title: "Unser Standort"
        },
        about_page: {
            label: "Wer wir sind",
            title: "Über COLOSIMO PEINTURE",
            subtitle: "20 Jahre Exzellenz in Malerei, Tapeten und Gipserei im Dienste von Genf",
            story_label: "Unsere Geschichte",
            story_title: "Eine Leidenschaft wird zur Expertise",
            story_p1: "Alles begann mit einer Leidenschaft. Nach 20 Jahren, in denen er die Kunst der Malerei und Dekoration in Genf perfektioniert hat, gr\u00fcndete der Inhaber von COLOSIMO PEINTURE im Jahr 2024 sein eigenes Unternehmen. Das Ziel war klar: erstklassige Malerarbeiten anzubieten, bei denen traditionelles Handwerk und modernste Techniken Hand in Hand gehen.",
            story_p2: "Heute, mit \u00fcber 75 erfolgreich abgeschlossenen Projekten \u2014 Wohnungen, Villen, B\u00fcros, Gesch\u00e4ftsr\u00e4ume \u2014 stellen wir an jede Arbeit denselben hohen Anspruch. F\u00fcr uns ist jede Baustelle einzigartig und verdient h\u00f6chste Sorgfalt, vom ersten Pinselstrich bis zum letzten Feinschliff.",
            story_p3: "Unser Unternehmen ist durch die Bundesmatrikel zertifiziert und steht f\u00fcr kompromisslose Professionalit\u00e4t und die vollst\u00e4ndige Einhaltung der schweizerischen Qualit\u00e4tsnormen.",
            local_label: "Lokale Präsenz",
            local_title: "Verankert in Genf",
            local_p1: "Unser Büro in der <strong>Route de Colovrex 7, 1218 Le Grand-Saconnex</strong> ermöglicht es uns, die gesamte Genfer Region effizient zu bedienen.",
            local_p2: "Diese geografische Nähe ermöglicht es uns, einen reaktionsschnellen und personalisierten Service anzubieten, mit kostenlosen Besichtigungen und schnellen Interventionen.",
            local_zone_label: "Einsatzgebiet",
            local_zone_value: "Genf und Kanton Waadt",
            local_hours_label: "Öffnungszeiten",
            local_hours_value: "Mo-Fr: 7:30 - 18:00",
            team_label: "Unser Team",
            team_title: "Ein Team engagierter Fachleute",
            team_subtitle: "Vier leidenschaftliche Experten zu Ihren Diensten",
            team4_title: "Professioneller Maler",
            team4_role: "Spezialist für Innen- & Außenmalerei",
            team4_bio: "Experte für Wohn- und Gewerbemalerei. Exzellenz in der Oberflächenbehandlung und Termintreue.",
            team1_title: "Gründer & Direktor",
            team1_role: "Experte für Malerei und Dekoration",
            team1_bio: "20 Jahre Erfahrung im Sektor. Spezialisiert auf hochwertige Oberflächen und Restaurierung.",
            team2_title: "Maler-Dekorateur",
            team2_role: "Tapetenspezialist",
            team2_bio: "Experte für Tapetenverlegung und Dekorationstechniken. Präzision und Kreativität im Dienst Ihrer Projekte.",
            team3_title: "Gipser-Plättler",
            team3_role: "Untergrundspezialist",
            team3_bio: "Perfekte Beherrschung der Oberflächenvorbereitung und Gipsarbeiten für makellose Grundlagen.",
            values_label: "Unsere Werte",
            values_title: "Was uns leitet",
            value1_title: "Präzision",
            value1_desc: "Jeder Pinselstrich zählt. Wir bringen sorgfältige Aufmerksamkeit für jedes Detail auf, um ein perfektes Ergebnis zu gewährleisten.",
            value2_title: "Sauberkeit",
            value2_desc: "Saubere und organisierte Baustelle. Tägliche Reinigung inklusive und makellose Wiederherstellung am Projektende.",
            value3_title: "Termintreue",
            value3_desc: "Rigorose Planung und Einhaltung der Verpflichtungen. Ihr Projekt wird pünktlich geliefert.",
            value4_title: "Materialqualität",
            value4_desc: "Exklusive Auswahl von Premium-Farben und Materialien, um Langlebigkeit und Ästhetik zu gewährleisten.",
            value5_title: "Transparenz",
            value5_desc: "Klare Kommunikation, detaillierte Angebote und ehrliche Beratung, um Ihnen zu helfen, die besten Entscheidungen zu treffen.",
            value6_title: "Professionalität",
            value6_desc: "Qualifiziertes, versichertes und zertifiziertes Team. Vollständige Konformität mit schweizerischen Baunormen.",
            cert_label: "Zertifizierungen & Garantien",
            cert_title: "Ihre Seelenruhe",
            cert1_title: "Bundesmatrikel",
            cert1_desc: "Offizielle Zertifizierung, die unsere Konformität mit schweizerischen Qualitäts- und Professionalitätsstandards garantiert.",
            cert2_title: "Arbeitsgarantie",
            cert2_desc: "Alle unsere Arbeiten sind garantiert. Wir greifen schnell ein, wenn Probleme auftreten, um Ihre vollständige Zufriedenheit sicherzustellen.",
            cert3_title: "Haftpflichtversicherung",
            cert3_desc: "Vollständige Abdeckung für alle unsere Baustellen. Ihr Eigentum ist während der gesamten Dauer der Arbeiten geschützt.",
            timeline_label: "Unser Werdegang",
            timeline_title: "Meilensteine und Erfolge",
            timeline1_title: "Erfahrungsbeginn",
            timeline1_desc: "Der Gründer beginnt seine Karriere im Bereich Malerei und Dekoration in Genf.",
            timeline2_title: "Spezialisierung",
            timeline2_desc: "Vertiefte Ausbildung in fortgeschrittenen Dekorationstechniken und Restaurierung historischer Gebäude.",
            timeline3_title: "50+ Projekte",
            timeline3_desc: "Überschreitung der Marke von 50 erfolgreichen Projekten mit etabliertem Ruf in der Genfer Region.",
            timeline4_title: "Gründung von COLOSIMO PEINTURE",
            timeline4_desc: "Offizielle Gründung des Unternehmens mit Erhalt der Bundesmatrikel. Aufbau eines Teams von 4 Fachleuten.",
            timeline5_title: "75+ realisierte Projekte",
            timeline5_desc: "Kontinuierliche Expansion mit treuer Kundschaft und immer ehrgeizigeren Projekten in der Genfer Region.",
            cta_title: "Bereit, Ihr Projekt zu starten?",
            cta_text: "Kontaktieren Sie uns für eine kostenlose Offerte und entdecken Sie, wie wir Ihren Raum verwandeln können.",
            cta_quote: "Offerte anfordern",
            cta_services: "Unsere Dienstleistungen ansehen"
        },
        privacy_page: {
            label: "Rechtliche Informationen",
            title: "Datenschutz & Cookies",
            subtitle: "Schutz Ihrer persönlichen Daten und Verwendung von Cookies",
            updated: "Letzte Aktualisierung:",
            questions: "Fragen zu Ihren Daten?",
            questions_text: "Unser Team steht Ihnen zur Verfügung, um alle Ihre Fragen zu beantworten.",
            back_home: "Zurück zur Startseite"
        },
        cookies: {
            title: "Wir verwenden Cookies",
            message: "Wir verwenden essenzielle Cookies für den Betrieb unserer Website und, mit Ihrer Zustimmung, Cookies zur Verbesserung Ihrer Erfahrung.",
            learn_more: "Mehr erfahren",
            accept_all: "Alle akzeptieren",
            decline_all: "Alle ablehnen",
            customize: "Anpassen",
            settings_title: "Cookie-Einstellungen",
            settings_subtitle: "Wählen Sie die Cookies, die Sie zulassen möchten",
            necessary: "Notwendige Cookies",
            necessary_desc: "Diese Cookies sind für den Betrieb der Website unerlässlich.",
            preferences: "Präferenz-Cookies",
            preferences_desc: "Diese Cookies speichern Ihre Auswahl und Präferenzen.",
            analytics: "Analytische Cookies",
            analytics_desc: "Diese Cookies helfen uns zu verstehen, wie Sie unsere Website nutzen.",
            marketing: "Marketing-Cookies",
            marketing_desc: "Diese Cookies ermöglichen es uns, Ihnen angepasste Inhalte anzubieten.",
            required: "Erforderlich",
            cancel: "Abbrechen",
            save: "Speichern"
        },
        quote_popup: {
            title: "Fordern Sie Ihr kostenloses Angebot an",
            subtitle: "Garantierte Antwort innerhalb von 48 Stunden — Unverbindlich"
        },
        gallery_cards: {
            renovation_apartment: {
                title: "Wohnungsrenovierung",
                category: "Genf | Wohnung",
                desc: "Komplette Malerarbeiten für eine 4-Zimmer-Wohnung mit Tapete im Wohnzimmer"
            },
            facade_renovee: {
                title: "Fassade renoviert",
                category: "Genf | Außenbereich",
                desc: "Hochleistungs-Fassadenanstrich"
            },
            espace_commercial: {
                title: "UNO — Versammlungssaal",
                category: "Genf | Institutionell",
                desc: "Renovierung des aktuellen UNO-Saals in Genf"
            },
            tpg_tram: {
                title: "TPG — Tram Genf",
                category: "Genf | Transport",
                desc: "Kreative Dekoration der TPG-Tram in Genf"
            },
            salon_elegant: {
                title: "Elegantes Wohnzimmer",
                category: "Genf | Wohnzimmer",
                desc: "Modernisierung der Innenräume mit hochwertigen Finishs"
            }
        }
    },
    it: {
        nav: {
            home: "Home",
            about: "Chi siamo",
            services: "Servizi",
            gallery: "Galleria",
            faq: "FAQ",
            contact: "Contatto"
        },
        cta: {
            quote: "Preventivo gratuito",
            free_quote: "Richiedi un preventivo gratuito",
            discover: "Scopri i nostri servizi",
            all_services: "Vedi tutti i servizi",
            view_gallery: "Vedi tutta la galleria",
            contact_us: "Contattaci",
            hours: "Orari: 7:30 - 18:00"
        },
        hero: {
            label: "Eccellenza nella pittura dal 2004",
            title: "Il tuo Esperto in Pittura,\nCarta da Parati & Gessatura",
            subtitle: "Oltre 20 anni di esperienza e 75+ progetti realizzati con precisione.\nMateriali di qualità, prezzi competitivi e garanzia su tutti i nostri lavori.",
            scroll: "Scorri",
            trust: {
                certified: "Matrice federale",
                experience: "20 anni di esperienza",
                projects: "75+ progetti"
            }
        },
        whyus: {
            label: "I nostri impegni",
            title: "Perché sceglierci?",
            subtitle: "Un'esperienza riconosciuta al servizio del tuo progetto",
            precision: {
                title: "Precisione esperta",
                text: "Ogni dettaglio conta. Il nostro team assicura una finitura impeccabile su tutti i tuoi progetti di pittura e decorazione."
            },
            experience: {
                title: "20 anni di esperienza",
                text: "Due decenni di eccellenza nel campo della pittura, carta da parati e gessatura a Ginevra."
            },
            materials: {
                title: "Materiali di qualità",
                text: "Selezioniamo solo vernici e materiali di alta gamma per garantire durata ed estetica."
            },
            price: {
                title: "Prezzi competitivi",
                text: "Tariffe trasparenti ed eque senza compromessi sulla qualità. Preventivo gratuito entro 48 ore."
            }
        },
        stats: {
            projects: "Progetti completati",
            years: "Anni di esperienza",
            team: "Professionisti",
            satisfaction: "Soddisfazione cliente"
        },
        services: {
            label: "La nostra expertise",
            title: "I nostri servizi",
            subtitle: "Soluzioni complete per tutte le tue esigenze di pittura e decorazione",
            learn_more: "Scopri di più →",
            internal: {
                title: "Pittura interna",
                desc: "Trasformazione di interni per appartamenti, ville e uffici con finiture perfette."
            },
            external: {
                title: "Pittura esterna",
                desc: "Protezione e abbellimento di facciate con vernici resistenti alle intemperie."
            },
            wallpaper: {
                title: "Carta da parati",
                desc: "Posa professionale di carta da parati per creare atmosfere uniche ed eleganti."
            },
            decoration: {
                title: "Decorazioni",
                desc: "Tecniche decorative raffinate: stucco, trompe-l'oeil, effetti materici e finiture artistiche."
            },
            plaster: {
                title: "Gessatura & Intonacatura",
                desc: "Lavori di gesso, levigatura muri e preparazione superfici per una base perfetta."
            },
            special: {
                title: "Verniciature speciali",
                desc: "Trattamenti antimuffa, verniciature, restauri e finiture tecniche su misura."
            }
        },
        gallery: {
            label: "Le nostre realizzazioni",
            title: "Prima / Dopo",
            subtitle: "Scopri la trasformazione dei nostri progetti",
            example1: "Ristrutturazione appartamento - Ginevra",
            filter: {
                all: "Tutti i progetti",
                appartement: "Appartamenti",
                villa: "Ville",
                bureau: "Uffici",
                commerce: "Negozi"
            }
        },
        trusted: {
            label: "Ci hanno scelto",
            onu_name: "Nazioni Unite — Ginevra",
            onu_desc: "Ristrutturazione della Sala delle Assemblee",
            tpg_name: "TPG — Trasporti Pubblici Ginevrini",
            tpg_desc: "Decorazione creativa della Tram di Ginevra"
        },
        testimonials: {
            label: "Testimonianze",
            title: "Cosa dicono i nostri clienti",
            subtitle: "La fiducia dei nostri clienti a Ginevra da oltre 20 anni",
            test1: {
                text: "Lavoro impeccabile e squadra molto professionale. Il nostro appartamento è stato trasformato oltre le nostre aspettative. Raccomando vivamente COLOSIMO SERVICE.",
                name: "Marie D.",
                location: "Ginevra",
                service: "Pittura interna"
            },
            test2: {
                text: "Eccellente rapporto qualità-prezzo. Il cantiere era pulito ogni sera e completato nei tempi promessi. Una squadra seria e competente.",
                name: "Pierre L.",
                location: "Losanna",
                service: "Pittura esterna"
            },
            test3: {
                text: "Lavoro di precisione per il restauro della nostra villa antica. L'esperienza del team COLOSIMO ha fatto tutta la differenza. Risultato magnifico!",
                name: "Sophie M.",
                location: "Montreux",
                service: "Ristrutturazione villa"
            },
            test4: {
                text: "La posa della carta da parati nel nostro soggiorno è assolutamente perfetta. Nessuna bolla, nessun difetto. Un lavoro artigianale che si nota al primo sguardo.",
                name: "Jean-Marc B.",
                location: "Nyon",
                service: "Carta da parati"
            },
            test5: {
                text: "La nostra facciata aveva bisogno di un rinnovo completo. Il team COLOSIMO ha scelto i colori ideali e il risultato è spettacolare. I nostri vicini sono impressionati!",
                name: "Catherine R.",
                location: "Vevey",
                service: "Pittura esterna"
            },
            test6: {
                text: "Gli effetti decorativi realizzati nel nostro ristorante sono di una bellezza eccezionale. I clienti ci fanno i complimenti ogni giorno. Grazie a tutto il team!",
                name: "Antoine V.",
                location: "Ginevra",
                service: "Decorazione artistica"
            },
            test7: {
                text: "Abbiamo incaricato COLOSIMO di ridipingere tutto il nostro ufficio. Lavoro accurato, rispetto degli orari e pulizia impeccabile. Professionalità esemplare.",
                name: "Isabelle F.",
                location: "Morges",
                service: "Pittura interna"
            },
            test8: {
                text: "Il trompe-l'oeil realizzato nel nostro ingresso è una vera opera d'arte. Ogni visitatore si ferma ad ammirarlo. Un talento raro e un servizio di alto livello.",
                name: "François G.",
                location: "Friburgo",
                service: "Decorazione artistica"
            },
            test9: {
                text: "Dopo aver confrontato diversi preventivi, abbiamo scelto COLOSIMO e non ce ne pentiamo. Il miglior rapporto qualità-prezzo della regione con un risultato impeccabile.",
                name: "Laurent P.",
                location: "Sion",
                service: "Pittura interna"
            },
            test10: {
                text: "La ristrutturazione completa del nostro chalet è stata gestita con una professionalità notevole. Dalla scelta delle tinte alla finitura, tutto era perfetto. Bravo!",
                name: "Nathalie K.",
                location: "Crans-Montana",
                service: "Ristrutturazione completa"
            }
        },
        "cta.strip": {
            title: "Pronto a trasformare il tuo spazio?",
            subtitle: "Contattaci per un preventivo gratuito e un sopralluogo"
        },
        footer: {
            description: "Esperto in pittura, carta da parati e gessatura da oltre 20 anni a Ginevra.",
            cert: "✓ Matrice federale",
            guarantee: "✓ Garanzia lavori",
            navigation: "Navigazione",
            services: "Servizi",
            contact: "Contatto",
            hours: "Lun-Ven: 7:30 - 18:00",
            rights: "Tutti i diritti riservati.",
            privacy: "Privacy",
            cookies: "Cookies"
        },
        services_page: {
            label: "La nostra expertise",
            title: "I nostri Servizi",
            subtitle: "Soluzioni complete in pittura, carta da parati e gessatura per tutti i vostri progetti",
            intro_text: "Con 20 anni di esperienza, vi accompagniamo in tutti i vostri progetti.",
            intro_bold1: "Preventivo gratuito",
            intro_bold2: "visita di sopralluogo offerta",
            intro_and: "e",
            cta_quote: "Richiedere un preventivo",
            internal: {
                title: "Pittura Interna",
                subtitle: "Trasformate i vostri spazi interni con finiture impeccabili.",
                description: "Il nostro servizio di pittura interna copre appartamenti, ville, uffici e negozi. Utilizziamo pitture di alta qualità adatte a ogni ambiente.",
                types_title: "Tipi di progetti",
                type1_label: "Appartamenti",
                type1_desc: "Ristrutturazione completa o parziale",
                type2_label: "Ville",
                type2_desc: "Grandi spazi, altezze sotto soffitto",
                type3_label: "Uffici",
                type3_desc: "Spazi professionali",
                type4_label: "Negozi",
                type4_desc: "Nei colori del vostro marchio"
            },
            external: {
                title: "Pittura Esterna",
                subtitle: "Proteggete e abbellite le vostre facciate con pitture resistenti.",
                description: "Pitture specificamente concepite per l'esterno, protezione contro pioggia, gelo e raggi UV. Durata 8-12 anni garantita.",
                surfaces_title: "Tipi di superfici",
                surface1_label: "Facciate intonacate",
                surface1_desc: "Ristrutturazione e protezione",
                surface2_label: "Legno",
                surface2_desc: "Trattamento e pittura dei rivestimenti",
                surface3_label: "Metallo",
                surface3_desc: "Pittura anticorrosione",
                surface4_label: "Balconi e terrazze",
                surface4_desc: "Protezione e finitura"
            },
            wallpaper: {
                title: "Posa di Carta da Parati",
                subtitle: "Create atmosfere uniche con una posa professionale.",
                description: "Padronanza di tutte le tecniche: carte tradizionali, panoramiche, texture 3D e viniliche. Giunzioni invisibili garantite.",
                types_title: "Tipi di carte da parati",
                type1_label: "Carta non tessuta",
                type1_desc: "Facile da posare, resistente",
                type2_label: "Vinile",
                type2_desc: "Lavabile, perfetto per cucine e bagni",
                type3_label: "Panoramiche",
                type3_desc: "Decori XXL su misura",
                type4_label: "Texture",
                type4_desc: "Rilievo 3D, fibre naturali"
            },
            decoration: {
                title: "Decorazioni Artistiche",
                subtitle: "Tecniche decorative raffinate per interni d'eccezione.",
                description: "Stucco veneziano, trompe-l'œil, patine, effetti di materia, affreschi murali. Ogni progetto è unico e realizzato su misura.",
                types_title: "Tipi di decorazioni",
                type1_label: "Stucco veneziano",
                type1_desc: "Finiture in gesso di lusso",
                type2_label: "Trompe-l'œil",
                type2_desc: "Illusioni ottiche su misura",
                type3_label: "Patine & effetti",
                type3_desc: "Invecchiamento e texture",
                type4_label: "Affreschi murali",
                type4_desc: "Decori dipinti a mano"
            },
            complementary: {
                title: "Servizi Complementari",
                service1_title: "Rasatura delle Pareti",
                service1_desc: "Preparazione perfetta delle vostre superfici. Correzione dei difetti, riempimento delle crepe per un supporto liscio.",
                service2_title: "Trattamento Antimuffa",
                service2_desc: "Soluzione duratura contro l'umidità. Diagnosi, trattamento fungicida e pitture speciali antimuffa.",
                service3_title: "Pitture Speciali",
                service3_desc: "Verniciatura, lasure, pitture tecniche per tutte le vostre esigenze specifiche di protezione o estetica.",
                service4_title: "Restauri",
                service4_desc: "Competenza nel restauro di edifici antichi. Tecniche tradizionali e materiali d'epoca.",
                service5_title: "Gessatura & Intonacatura",
                service5_desc: "Controsoffitti, pareti divisorie, modanature decorative. Base essenziale per ogni finitura di qualità.",
                cta: "Richiedere un preventivo →"
            },
            included: {
                title: "Cosa è incluso",
                item1_title: "Preventivo gratuito",
                item1_desc: "Stima entro 48h",
                item2_title: "Visita offerta",
                item2_desc: "Sopralluogo sul posto",
                item3_title: "Pulizia inclusa",
                item3_desc: "Fine cantiere impeccabile",
                item4_title: "Garanzia lavori",
                item4_desc: "Tutti i lavori garantiti"
            },
            cta: {
                title: "Un progetto in mente?",
                text: "Contattateci per ricevere un preventivo personalizzato gratuito."
            },
            ask_quote: "Richiedere un preventivo"
        },
        gallery_page: {
            label: "Le nostre realizzazioni",
            title: "Galleria Progetti",
            subtitle: "Scoprite 75+ progetti realizzati con passione e precisione a Ginevra",
            filter_all: "Tutti i progetti",
            filter_apt: "Appartamenti",
            filter_villa: "Ville",
            filter_office: "Uffici",
            filter_shop: "Negozi",
            projects_completed: "Oltre 75 progetti completati",
            projects_text: "Ogni progetto è unico e beneficia della nostra esperienza ventennale. Dalla semplice ristrutturazione di appartamento ai cantieri complessi di ville e negozi.",
            discuss: "Discutete del vostro progetto"
        },
        faq_page: {
            label: "Domande frequenti",
            title: "FAQ",
            subtitle: "Trovate le risposte alle vostre domande sui nostri servizi di pittura",
            q1: "Quali sono i vostri tempi di intervento?",
            a1: "Ci sforziamo di intervenire entro 2-3 settimane dalla conferma del preventivo. Per progetti urgenti, possono essere considerati tempi più brevi a seconda della nostra programmazione. La durata dei lavori varia in base alla superficie e alla complessità: generalmente 2-5 giorni per un appartamento standard, 1-2 settimane per una villa.",
            q2: "Il preventivo è davvero gratuito?",
            a2: "Sì, assolutamente! Offriamo un preventivo dettagliato gratuito e senza impegno per tutti i nostri servizi. Questo include anche una visita di sopralluogo sul posto per valutare con precisione lo stato delle superfici e consigliarvi sulle migliori soluzioni. Riceverete il vostro preventivo entro 48 ore dalla visita.",
            q3: "Offrite una garanzia sui vostri lavori?",
            a3: "Tutti i nostri lavori sono garantiti 2 anni sulla manodopera. Questa garanzia copre i difetti di applicazione e i problemi legati al nostro intervento. Inoltre, utilizziamo pitture e materiali di qualità che beneficiano anche delle garanzie dei produttori. In caso di problema, interveniamo rapidamente per trovare una soluzione.",
            q4: "La pulizia di fine cantiere è inclusa?",
            a4: "Sì, la pulizia completa è sempre inclusa nelle nostre prestazioni! Puliamo quotidianamente il cantiere durante i lavori ed eseguiamo una pulizia approfondita alla fine dell'intervento. Tutte le protezioni vengono rimosse, i pavimenti aspirati e lavati, e ci assicuriamo che il vostro spazio sia perfettamente pulito e pronto per essere utilizzato immediatamente.",
            q5: "Che tipi di pitture utilizzate?",
            a5: "Lavoriamo esclusivamente con pitture professionali di alta qualità di marche riconosciute. Secondo le vostre esigenze, proponiamo pitture acriliche senza solventi per interni, pitture speciali per ambienti umidi, pitture ecologiche certificate e pitture esterne resistenti al clima svizzero. Vi consigliamo sulla scelta migliore secondo il vostro progetto e budget.",
            q6: "Intervenite in tutta la regione di Ginevra?",
            a6: "Sì, interveniamo principalmente a Ginevra e in tutta la regione ginevrina. Il nostro ufficio si trova a Le Grand-Saconnex (Ginevra), il che ci permette di coprire efficacemente tutta la regione. Per progetti più distanti, organizziamo i nostri interventi per ottimizzare gli spostamenti.",
            q7: "Come proteggete i mobili durante i lavori?",
            a7: "La protezione dei vostri mobili è una priorità. Raggruppiamo i mobili al centro delle stanze e li copriamo con teloni di plastica professionali. I pavimenti sono protetti con pellicole di protezione adeguate. Tutti gli interruttori, prese e lampade sono accuratamente mascherati. Per oggetti fragili o di valore, raccomandiamo di metterli in sicurezza prima del nostro intervento.",
            q8: "Devo essere presente durante i lavori?",
            a8: "La vostra presenza non è necessaria per tutta la durata dei lavori. Una presenza è raccomandata all'inizio per consegnarci le chiavi e mostrarci le specificità del luogo, poi alla fine per la consegna dei lavori. Nel frattempo, potete occuparvi delle vostre faccende in tutta tranquillità. Manteniamo una comunicazione regolare e vi teniamo informati sui progressi.",
            q9: "Si può abitare nell'appartamento durante i lavori?",
            a9: "È possibile, ma dipende dall'ampiezza dei lavori. Per una stanza isolata, potete tranquillamente continuare a vivere nel resto dell'appartamento. Per una ristrutturazione completa, organizziamo i lavori stanza per stanza per minimizzare il disagio. Le pitture che utilizziamo sono poco odorose e si asciugano rapidamente. Vi consigliamo sulla migliore organizzazione secondo la vostra situazione.",
            q10: "Offrite un servizio post-vendita?",
            a10: "Assolutamente! Restiamo a vostra disposizione dopo la fine dei lavori per qualsiasi domanda o preoccupazione. Se notate un difetto coperto dalla nostra garanzia, interveniamo rapidamente per rimediare. Offriamo anche consigli sulla manutenzione per preservare la bellezza delle vostre pitture nel tempo. La vostra soddisfazione è la nostra priorità, anche dopo la fine del cantiere.",
            q11: "Fornite voi la pittura o devo comprarla?",
            a11: "Forniamo generalmente tutti i materiali (pittura, primer, stucchi) nell'ambito della nostra prestazione, che è inclusa nel preventivo. Questo garantisce l'uso di prodotti professionali adeguati e ottimizza le quantità. Se desiderate fornire voi stessi la pittura, è possibile, ma vi consigliamo sulle specifiche tecniche e le quantità necessarie per evitare brutte sorprese.",
            q12: "Accettate pagamenti rateali?",
            a12: "Per progetti di ampia portata, proponiamo effettivamente un pagamento rateale: un acconto alla firma del contratto (generalmente 30%), un pagamento intermedio a metà percorso per i grandi cantieri e il saldo alla consegna dei lavori. Le modalità esatte sono definite nel preventivo e adattate a ogni progetto. Accettiamo pagamenti tramite bonifico bancario, TWINT o contanti.",
            other_questions: "Avete altre domande?",
            other_text: "Il nostro team è a vostra disposizione per rispondere a tutte le vostre domande e consigliarvi sul vostro progetto.",
            contact_us: "Contattateci"
        },
        contact: {
            label: "Contattateci",
            title: "Pronti a trasformare il vostro spazio?",
            subtitle: "Contattateci per un preventivo gratuito e una visita di sopralluogo",
            address_label: "Indirizzo",
            phone_label: "Telefono",
            email_label: "Email",
            hours_label: "Orari",
            hours_days: "Lunedì - Venerdì",
            hours_times: "7:30 - 18:00",
            zone_label: "Zona",
            open_badge: "Aperto",
            closed_badge: "Chiuso",
            cta_heading: "Preventivo gratuito in 48h",
            cta_sub: "Senza impegno · Visita in loco · Risposta rapida",
            or_quote: "O richiedere un preventivo diretto"
        },
        contact_page: {
            label: "Contattateci",
            title: "Richiedete il vostro Preventivo Gratuito",
            subtitle: "Vi rispondiamo entro 48h con una stima dettagliata e personalizzata",
            form_title: "Modulo di Contatto",
            form: {
                lastname: "Cognome *",
                lastname_placeholder: "Il vostro cognome",
                firstname: "Nome *",
                firstname_placeholder: "Il vostro nome",
                email: "Email *",
                email_placeholder: "vostra@email.com",
                phone: "Telefono *",
                phone_placeholder: "+41 78 123 45 67",
                project_type: "Tipo di progetto *",
                project_type_select: "Selezionate un tipo di progetto",
                project_internal: "Pittura interna",
                project_external: "Pittura esterna",
                project_wallpaper: "Carta da parati",
                project_decoration: "Decorazioni",
                project_smoothing: "Rasatura delle pareti",
                project_antimold: "Trattamento antimuffa",
                project_special: "Pitture speciali",
                project_restoration: "Restauri",
                project_plaster: "Gessatura & Intonacatura",
                project_other: "Altro",
            address: "Indirizzo del cantiere",
            address_placeholder: "Via e numero, CAP Città",
                message: "Descrivete il vostro progetto *",
                message_placeholder: "Descriveteci il vostro progetto in dettaglio: superficie approssimativa, stato attuale, i vostri desideri...",
            privacy_accept: "Accetto l'",
            privacy_link: "informativa sulla privacy",
            privacy_text: "e acconsento al trattamento dei miei dati personali.",
                submit: "Inviare la richiesta",
            response_time: "Risposta entro 48h • Preventivo gratuito • Senza impegno",
                success_title: "Grazie per la tua richiesta!",
                success_message: "Il tuo messaggio è in elaborazione. Ti risponderemo il prima possibile.",
                success_close: "Chiudi"
            },
            info_title: "Informazioni di Contatto",
            info: {
            address_label: "Indirizzo",
            phone_label: "Telefono",
            email_label: "Email",
            hours_label: "Orari",
                hours_days: "Lunedì - Venerdì",
                hours_times: "7:30 - 18:00",
                social_label: "Seguici"
            },
            zone: {
                title: "Zona d'intervento",
                description: "Interveniamo principalmente a Ginevra e in tutta la regione ginevrina.",
                geneva: "✓ Ginevra e regione",
                lausanne: "✓ Losanna e dintorni",
                montreux: "✓ Montreux - Vevey",
                valais: "✓ Vallese (su richiesta)"
            },
            map_title: "La nostra Posizione"
        },
        about_page: {
            label: "Chi siamo",
            title: "A proposito di COLOSIMO PEINTURE",
            subtitle: "20 anni di eccellenza in pittura, carta da parati e gessatura al servizio di Ginevra",
            story_label: "La nostra storia",
            story_title: "Una passione diventata expertise",
            story_p1: "Tutto \u00e8 nato da una passione. Dopo 20 anni dedicati a perfezionare l\u2019arte della pittura e della decorazione a Ginevra, il fondatore di COLOSIMO PEINTURE ha deciso nel 2024 di creare la propria azienda. L\u2019obiettivo era chiaro: offrire un servizio di alta qualit\u00e0, dove la maestria artigianale si unisce alle tecniche pi\u00f9 moderne.",
            story_p2: "Oggi, con oltre 75 progetti portati a termine con successo \u2014 appartamenti, ville, uffici, spazi commerciali \u2014 manteniamo sempre la stessa esigenza in ogni lavoro. Per noi, ogni cantiere \u00e8 unico e merita la massima cura, dalla prima pennellata fino alla finitura finale.",
            story_p3: "Certificata dalla Matrice federale, la nostra azienda vi garantisce una professionalit\u00e0 rigorosa e il pieno rispetto delle norme svizzere di qualit\u00e0.",
            local_label: "Presenza locale",
            local_title: "Radicati a Ginevra",
            local_p1: "Il nostro ufficio situato in <strong>Route de Colovrex 7, 1218 Le Grand-Saconnex</strong> ci permette di servire efficacemente tutta la regione ginevrina.",
            local_p2: "Questa vicinanza geografica ci permette di offrire un servizio reattivo e personalizzato, con visite di sopralluogo gratuite e interventi rapidi.",
            local_zone_label: "Zona d'intervento",
            local_zone_value: "Ginevra e Canton Vaud",
            local_hours_label: "Orari",
            local_hours_value: "Lun-Ven: 7:30 - 18:00",
            team_label: "Il nostro team",
            team_title: "Un team di professionisti dedicati",
            team_subtitle: "Quattro esperti appassionati al vostro servizio",
            team4_title: "Pittore professionista",
            team4_role: "Specialista pittura interna & esterna",
            team4_bio: "Esperto in pittura residenziale e commerciale. Eccellenza nella finitura e nel rispetto dei tempi.",
            team1_title: "Fondatore & Direttore",
            team1_role: "Esperto in pittura e decorazione",
            team1_bio: "20 anni di esperienza nel settore. Specializzato in finiture di alta gamma e restauro.",
            team2_title: "Pittore decoratore",
            team2_role: "Specialista carta da parati",
            team2_bio: "Esperto in posa di carta da parati e tecniche decorative. Precisione e creatività al servizio dei vostri progetti.",
            team3_title: "Gessatore-Intonacatore",
            team3_role: "Specialista dei supporti",
            team3_bio: "Padronanza perfetta della preparazione delle superfici e dei lavori di intonacatura per basi impeccabili.",
            values_label: "I nostri valori",
            values_title: "Ciò che ci guida",
            value1_title: "Precisione",
            value1_desc: "Ogni tratto di pennello conta. Portiamo un'attenzione meticolosa a ogni dettaglio per garantire un risultato perfetto.",
            value2_title: "Pulizia",
            value2_desc: "Cantiere pulito e organizzato. Pulizia quotidiana inclusa e ripristino impeccabile alla fine del progetto.",
            value3_title: "Rispetto dei tempi",
            value3_desc: "Pianificazione rigorosa e rispetto degli impegni. Il vostro progetto consegnato nei tempi concordati.",
            value4_title: "Qualità dei materiali",
            value4_desc: "Selezione esclusiva di pitture e materiali premium per assicurare durata ed estetica.",
            value5_title: "Trasparenza",
            value5_desc: "Comunicazione chiara, preventivi dettagliati e consigli onesti per aiutarvi a fare le migliori scelte.",
            value6_title: "Professionalità",
            value6_desc: "Team qualificato, assicurato e certificato. Conformità totale alle norme svizzere di costruzione.",
            cert_label: "Certificazioni & garanzie",
            cert_title: "La vostra tranquillità",
            cert1_title: "Matrice federale",
            cert1_desc: "Certificazione ufficiale che garantisce la nostra conformità agli standard svizzeri di qualità e professionalità.",
            cert2_title: "Garanzia sui lavori",
            cert2_desc: "Tutti i nostri lavori sono garantiti. Interveniamo rapidamente in caso di problema per assicurare la vostra soddisfazione totale.",
            cert3_title: "Assicurazione responsabilità",
            cert3_desc: "Copertura completa per tutti i nostri cantieri. Il vostro bene è protetto per tutta la durata dei lavori.",
            timeline_label: "Il nostro percorso",
            timeline_title: "Tappe e realizzazioni",
            timeline1_title: "Inizio esperienza",
            timeline1_desc: "Il fondatore inizia la sua carriera nel settore della pittura e decorazione a Ginevra.",
            timeline2_title: "Specializzazione",
            timeline2_desc: "Formazione approfondita in tecniche decorative avanzate e restauro di edifici storici.",
            timeline3_title: "50+ progetti",
            timeline3_desc: "Superamento della soglia dei 50 progetti riusciti con una reputazione consolidata nella regione ginevrina.",
            timeline4_title: "Creazione di COLOSIMO PEINTURE",
            timeline4_desc: "Fondazione ufficiale dell'azienda con ottenimento della Matrice federale. Costituzione di un team di 4 professionisti.",
            timeline5_title: "75+ progetti realizzati",
            timeline5_desc: "Espansione continua con una clientela fedele e progetti sempre più ambiziosi nella regione ginevrina.",
            cta_title: "Pronti a iniziare il vostro progetto?",
            cta_text: "Contattateci per un preventivo gratuito e scoprite come possiamo trasformare il vostro spazio.",
            cta_quote: "Richiedere un preventivo",
            cta_services: "Vedere i nostri servizi"
        },
        privacy_page: {
            label: "Informazioni legali",
            title: "Privacy & Cookie",
            subtitle: "Protezione dei vostri dati personali e utilizzo dei cookie",
            updated: "Ultimo aggiornamento:",
            questions: "Domande sui vostri dati?",
            questions_text: "Il nostro team è a vostra disposizione per rispondere a tutte le vostre domande.",
            back_home: "Torna alla home"
        },
        cookies: {
            title: "Utilizziamo i cookie",
            message: "Utilizziamo cookie essenziali per il funzionamento del nostro sito e, con il vostro consenso, cookie per migliorare la vostra esperienza.",
            learn_more: "Saperne di più",
            accept_all: "Accetta tutto",
            decline_all: "Rifiuta tutto",
            customize: "Personalizza",
            settings_title: "Impostazioni cookie",
            settings_subtitle: "Scegliete i cookie che desiderate autorizzare",
            necessary: "Cookie necessari",
            necessary_desc: "Questi cookie sono indispensabili per il funzionamento del sito.",
            preferences: "Cookie di preferenza",
            preferences_desc: "Questi cookie memorizzano le vostre scelte e preferenze.",
            analytics: "Cookie analitici",
            analytics_desc: "Questi cookie ci aiutano a capire come utilizzate il nostro sito.",
            marketing: "Cookie di marketing",
            marketing_desc: "Questi cookie permettono di proporvi contenuti adattati.",
            required: "Obbligatorio",
            cancel: "Annulla",
            save: "Salva"
        },
        quote_popup: {
            title: "Richiedi il tuo preventivo gratuito",
            subtitle: "Risposta garantita entro 48 ore — Senza impegno"
        },
        gallery_cards: {
            renovation_apartment: {
                title: "Ristrutturazione appartamento",
                category: "Ginevra | Appartamento",
                desc: "Tinteggiatura completa di 4 locali con carta da parati in salone"
            },
            facade_renovee: {
                title: "Facciata rinnovata",
                category: "Ginevra | Esterno",
                desc: "Verniciatura esterna ad alte prestazioni"
            },
            espace_commercial: {
                title: "ONU — Sala delle Assemblee",
                category: "Ginevra | Istituzionale",
                desc: "Ristrutturazione della Sala attuale dell'ONU a Ginevra"
            },
            tpg_tram: {
                title: "TPG — Tram Ginevra",
                category: "Ginevra | Trasporti",
                desc: "Decorazione creativa della Tram TPG a Ginevra"
            },
            salon_elegant: {
                title: "Soggiorno elegante",
                category: "Ginevra | Soggiorno",
                desc: "Restyling degli interni con finiture di pregio"
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            services: "Services",
            gallery: "Gallery",
            faq: "FAQ",
            contact: "Contact"
        },
        cta: {
            quote: "Free Quote",
            free_quote: "Request a free quote",
            discover: "Discover our services",
            all_services: "View all services",
            view_gallery: "View full gallery",
            contact_us: "Contact us",
            hours: "Hours: 7:30 AM - 6:00 PM"
        },
        hero: {
            label: "Painting excellence since 2004",
            title: "Your Expert in Painting,\nWallpaper & Plastering",
            subtitle: "Over 20 years of experience and 75+ projects completed with precision.\nQuality materials, competitive prices, and warranty on all our work.",
            scroll: "Scroll",
            trust: {
                certified: "Federal matrix",
                experience: "20 years experience",
                projects: "75+ projects"
            }
        },
        whyus: {
            label: "Our commitments",
            title: "Why choose us?",
            subtitle: "Recognized expertise at the service of your project",
            precision: {
                title: "Expert precision",
                text: "Every detail matters. Our team ensures an impeccable finish on all your painting and decoration projects."
            },
            experience: {
                title: "20 years of experience",
                text: "Two decades of excellence in painting, wallpaper, and plastering in Geneva."
            },
            materials: {
                title: "Quality materials",
                text: "We only select high-end paints and materials to guarantee durability and aesthetics."
            },
            price: {
                title: "Competitive prices",
                text: "Transparent and fair pricing without compromising on quality. Free quote within 48 hours."
            }
        },
        stats: {
            projects: "Completed projects",
            years: "Years of experience",
            team: "Professionals",
            satisfaction: "Customer satisfaction"
        },
        services: {
            label: "Our expertise",
            title: "Our services",
            subtitle: "Complete solutions for all your painting and decoration needs",
            learn_more: "Learn more →",
            internal: {
                title: "Interior painting",
                desc: "Transformation of interiors for apartments, villas, and offices with perfect finishes."
            },
            external: {
                title: "Exterior painting",
                desc: "Protection and beautification of facades with weather-resistant paints."
            },
            wallpaper: {
                title: "Wallpaper",
                desc: "Professional wallpaper installation to create unique and elegant atmospheres."
            },
            decoration: {
                title: "Decorations",
                desc: "Refined decorative techniques: stucco, trompe-l'oeil, material effects, and artistic finishes."
            },
            plaster: {
                title: "Plastering & Gypsum",
                desc: "Plaster work, wall smoothing, and surface preparation for a perfect base."
            },
            special: {
                title: "Special paints",
                desc: "Anti-mold treatments, varnishing, restoration, and custom technical finishes."
            }
        },
        gallery: {
            label: "Our work",
            title: "Before / After",
            subtitle: "Discover the transformation of our projects",
            example1: "Apartment renovation - Geneva",
            filter: {
                all: "All projects",
                appartement: "Apartments",
                villa: "Villas",
                bureau: "Offices",
                commerce: "Commercial"
            }
        },
        trusted: {
            label: "They trusted us",
            onu_name: "United Nations — Geneva",
            onu_desc: "Renovation of the Assembly Hall",
            tpg_name: "TPG — Geneva Public Transport",
            tpg_desc: "Creative decoration of the Geneva Tram"
        },
        testimonials: {
            label: "Testimonials",
            title: "What our clients say",
            subtitle: "Trusted by homeowners across Geneva for over 20 years",
            test1: {
                text: "Impeccable work and very professional team. Our apartment was transformed beyond our expectations. I highly recommend COLOSIMO SERVICE.",
                name: "Marie D.",
                location: "Geneva",
                service: "Interior painting"
            },
            test2: {
                text: "Excellent value for money. The site was clean every evening and finished on schedule. A serious and competent team.",
                name: "Pierre L.",
                location: "Lausanne",
                service: "Exterior painting"
            },
            test3: {
                text: "Precision work for the restoration of our old villa. The expertise of the COLOSIMO team made all the difference. Magnificent result!",
                name: "Sophie M.",
                location: "Montreux",
                service: "Villa renovation"
            },
            test4: {
                text: "The wallpaper installation in our living room is absolutely perfect. No bubbles, no defects. A craftsman's work that is visible at first glance.",
                name: "Jean-Marc B.",
                location: "Nyon",
                service: "Wallpaper"
            },
            test5: {
                text: "Our facade needed a complete refresh. The COLOSIMO team chose the ideal colors and the result is spectacular. Our neighbors are impressed!",
                name: "Catherine R.",
                location: "Vevey",
                service: "Exterior painting"
            },
            test6: {
                text: "The decorative effects created in our restaurant are exceptionally beautiful. Customers compliment us every day. Thank you to the entire team!",
                name: "Antoine V.",
                location: "Geneva",
                service: "Artistic decoration"
            },
            test7: {
                text: "We hired COLOSIMO to repaint our entire office. Meticulous work, schedule adherence and impeccable cleanliness. Exemplary professionalism.",
                name: "Isabelle F.",
                location: "Morges",
                service: "Interior painting"
            },
            test8: {
                text: "The trompe-l'oeil created in our entrance hall is a true work of art. Every visitor stops to admire it. A rare talent and a premium service.",
                name: "François G.",
                location: "Lausanne",
                service: "Artistic decoration"
            },
            test9: {
                text: "After comparing several quotes, we chose COLOSIMO and have no regrets. The best value for money in the region with an impeccable result.",
                name: "Laurent P.",
                location: "Sion",
                service: "Interior painting"
            },
            test10: {
                text: "The complete renovation of our chalet was managed with remarkable professionalism. From color selection to finishing, everything was perfect. Bravo!",
                name: "Nathalie K.",
                location: "Crans-Montana",
                service: "Complete renovation"
            }
        },
        "cta.strip": {
            title: "Ready to transform your space?",
            subtitle: "Contact us for a free quote and site visit"
        },
        footer: {
            description: "Expert in painting, wallpaper, and plastering for over 20 years in Geneva and the canton of Vaud.",
            cert: "✓ Federal matrix",
            guarantee: "✓ Work warranty",
            navigation: "Navigation",
            services: "Services",
            contact: "Contact",
            hours: "Mon-Fri: 7:30 AM - 6:00 PM",
            rights: "All rights reserved.",
            privacy: "Privacy",
            cookies: "Cookies"
        },
        services_page: {
            label: "Our expertise",
            title: "Our Services",
            subtitle: "Complete solutions in painting, wallpaper and plastering for all your projects",
            intro_text: "With 20 years of experience, we support you in all your projects.",
            intro_bold1: "Free quote",
            intro_bold2: "free site visit",
            intro_and: "and",
            cta_quote: "Request a quote",
            internal: {
                title: "Interior Painting",
                subtitle: "Transform your interior spaces with impeccable finishes.",
                description: "Our interior painting service covers apartments, villas, offices and shops. We use high-quality paints adapted to each room.",
                types_title: "Project types",
                type1_label: "Apartments",
                type1_desc: "Complete or partial renovation",
                type2_label: "Villas",
                type2_desc: "Large spaces, high ceilings",
                type3_label: "Offices",
                type3_desc: "Professional spaces",
                type4_label: "Shops",
                type4_desc: "In your brand colors"
            },
            external: {
                title: "Exterior Painting",
                subtitle: "Protect and beautify your facades with resistant paints.",
                description: "Paints specifically designed for exterior use, protection against rain, frost and UV rays. Durability 8-12 years guaranteed.",
                surfaces_title: "Surface types",
                surface1_label: "Rendered facades",
                surface1_desc: "Renovation and protection",
                surface2_label: "Wood",
                surface2_desc: "Treatment and painting of cladding",
                surface3_label: "Metal",
                surface3_desc: "Anti-corrosion paint",
                surface4_label: "Balconies & terraces",
                surface4_desc: "Protection and finishing"
            },
            wallpaper: {
                title: "Wallpaper Installation",
                subtitle: "Create unique atmospheres with professional installation.",
                description: "Mastery of all techniques: traditional papers, panoramic, 3D textures and vinyl. Invisible seams guaranteed.",
                types_title: "Wallpaper types",
                type1_label: "Non-woven",
                type1_desc: "Easy to install, resistant",
                type2_label: "Vinyl",
                type2_desc: "Washable, perfect for kitchens and bathrooms",
                type3_label: "Panoramic",
                type3_desc: "Custom XXL designs",
                type4_label: "Textured",
                type4_desc: "3D relief, natural fibers"
            },
            decoration: {
                title: "Artistic Decorations",
                subtitle: "Refined decorative techniques for exceptional interiors.",
                description: "Venetian stucco, trompe-l'œil, patinas, material effects, wall frescoes. Each project is unique and custom-made.",
                types_title: "Decoration types",
                type1_label: "Venetian stucco",
                type1_desc: "Luxury plaster finishes",
                type2_label: "Trompe-l'œil",
                type2_desc: "Custom optical illusions",
                type3_label: "Patinas & effects",
                type3_desc: "Aging and textures"
            },
            complementary: {
                title: "Additional Services",
                service1_title: "Wall Smoothing",
                service1_desc: "Perfect preparation of your surfaces. Correction of defects, filling of cracks for a smooth base.",
                service2_title: "Anti-Mold Treatment",
                service2_desc: "Durable solution against humidity. Diagnosis, fungicidal treatment and special anti-mold paints.",
                service3_title: "Special Paints",
                service3_desc: "Varnishing, stains, technical paints for all your specific protection or aesthetic needs.",
                service4_title: "Restorations",
                service4_desc: "Expertise in restoration of old buildings. Traditional techniques and period materials.",
                service5_title: "Plastering & Stucco",
                service5_desc: "Drywall, suspended ceilings, decorative moldings. Essential foundation for any quality finish.",
                cta: "Request a quote →"
            },
            included: {
                title: "What's included",
                item1_title: "Free quote",
                item1_desc: "Estimate within 48h",
                item2_title: "Free visit",
                item2_desc: "On-site inspection",
                item3_title: "Cleaning included",
                item3_desc: "Impeccable site cleanup",
                item4_title: "Work guarantee",
                item4_desc: "All work guaranteed"
            },
            cta: {
                title: "Have a project in mind?",
                text: "Contact us to receive a free, personalized quote."
            },
            ask_quote: "Request a quote"
        },
        gallery_page: {
            label: "Our work",
            title: "Project Gallery",
            subtitle: "Discover 75+ projects completed with passion and precision in Geneva and the canton of Vaud",
            filter_all: "All projects",
            filter_apt: "Apartments",
            filter_villa: "Villas",
            filter_office: "Offices",
            filter_shop: "Shops",
            projects_completed: "Over 75 completed projects",
            projects_text: "Each project is unique and benefits from our 20 years of expertise. From simple apartment renovations to complex villa and shop projects.",
            discuss: "Discuss your project"
        },
        faq_page: {
            label: "Frequently asked questions",
            title: "FAQ",
            subtitle: "Find answers to your questions about our painting services",
            q1: "What are your intervention times?",
            a1: "We strive to intervene within 2 to 3 weeks after quote validation. For urgent projects, shorter deadlines can be considered depending on our schedule. The duration of work varies according to surface area and complexity: generally 2-5 days for a standard apartment, 1-2 weeks for a villa.",
            q2: "Is the quote really free?",
            a2: "Yes, absolutely! We offer a detailed, free and non-binding quote for all our services. This also includes an on-site visit to accurately assess the condition of surfaces and advise you on the best solutions. You will receive your quote within 48 hours after the visit.",
            q3: "Do you offer a warranty on your work?",
            a3: "All our work is guaranteed 2 years on labor. This warranty covers application defects and problems related to our intervention. In addition, we use quality paints and materials that also benefit from manufacturer warranties. In case of problems, we intervene quickly to find a solution.",
            q4: "Is end-of-site cleaning included?",
            a4: "Yes, complete cleaning is always included in our services! We clean the site daily during work and perform a thorough cleaning at the end of the intervention. All protections are removed, floors vacuumed and washed, and we ensure that your space is perfectly clean and ready to be used immediately.",
            q5: "What types of paints do you use?",
            a5: "We work exclusively with high-quality professional paints from recognized brands. Depending on your needs, we offer solvent-free acrylic paints for interiors, special paints for wet rooms, certified ecological paints, and exterior paints resistant to the Swiss climate. We advise you on the best choice according to your project and budget.",
            q6: "Do you operate throughout the Geneva region?",
            a6: "Yes, we operate primarily in Geneva and throughout the Geneva region. Our office is located in Le Grand-Saconnex (Geneva), which allows us to efficiently cover the entire region. For more distant projects, we organize our interventions to optimize travel.",
            q7: "How do you protect furniture during work?",
            a7: "Protecting your furniture is a priority. We group furniture in the center of rooms and cover them with professional plastic tarps. Floors are protected with appropriate protective films. All switches, outlets and lights are carefully masked. For fragile or valuable objects, we recommend putting them in a safe place before our intervention.",
            q8: "Do I need to be present during the work?",
            a8: "Your presence is not necessary for the entire duration of the work. A presence is recommended at the beginning to give us the keys and show us the specificities of the place, then at the end for the acceptance of the work. In the meantime, you can go about your business in peace. We maintain regular communication and keep you informed of progress.",
            q9: "Can we live in the accommodation during the work?",
            a9: "It's possible, but it depends on the scope of the work. For an isolated room, you can absolutely continue to live in the rest of the accommodation. For a complete renovation, we organize the work room by room to minimize inconvenience. The paints we use are low-odor and dry quickly. We advise you on the best organization according to your situation.",
            q10: "Do you offer after-sales service?",
            a10: "Absolutely! We remain at your disposal after the end of the work for any questions or concerns. If you notice a defect covered by our warranty, we intervene quickly to remedy it. We also offer maintenance advice to preserve the beauty of your paints over time. Your satisfaction is our priority, even after the end of the site.",
            q11: "Do you supply the paint or do I have to buy it?",
            a11: "We generally supply all materials (paint, primers, putties) as part of our service, which is included in the quote. This guarantees the use of appropriate professional products and optimizes quantities. If you wish to supply the paint yourself, it's possible, but we advise you on technical specifications and quantities needed to avoid bad surprises.",
            q12: "Do you accept installment payments?",
            a12: "For large-scale projects, we do offer installment payments: a down payment at contract signing (usually 30%), an intermediate payment halfway through for large sites, and the balance upon acceptance of the work. The exact terms are defined in the quote and adapted to each project. We accept payments by bank transfer, TWINT or cash.",
            other_questions: "Do you have other questions?",
            other_text: "Our team is available to answer all your questions and advise you on your project.",
            contact_us: "Contact us"
        },
        contact: {
            label: "Contact us",
            title: "Ready to transform your space?",
            subtitle: "Contact us for a free quote and a site visit",
            address_label: "Address",
            phone_label: "Phone",
            email_label: "Email",
            hours_label: "Hours",
            hours_days: "Monday - Friday",
            hours_times: "7:30 - 18:00",
            zone_label: "Zone",
            open_badge: "Open",
            closed_badge: "Closed",
            cta_heading: "Free quote within 48h",
            cta_sub: "No commitment · On-site visit · Fast response",
            or_quote: "Or request a direct quote"
        },
        contact_page: {
            label: "Contact us",
            title: "Request Your Free Quote",
            subtitle: "We respond within 48h with a detailed and personalized estimate",
            form_title: "Contact Form",
            form: {
                lastname: "Last Name *",
                lastname_placeholder: "Your last name",
                firstname: "First Name *",
                firstname_placeholder: "Your first name",
                email: "Email *",
                email_placeholder: "your@email.com",
                phone: "Phone *",
                phone_placeholder: "+41 78 123 45 67",
                project_type: "Project type *",
                project_type_select: "Select a project type",
                project_internal: "Interior painting",
                project_external: "Exterior painting",
                project_wallpaper: "Wallpaper",
                project_decoration: "Decorations",
                project_smoothing: "Wall smoothing",
                project_antimold: "Anti-mold treatment",
                project_special: "Special paints",
                project_restoration: "Restorations",
                project_plaster: "Plastering & Stucco",
                project_other: "Other",
            address: "Site address",
            address_placeholder: "Street and number, Postal code City",
                message: "Describe your project *",
                message_placeholder: "Describe your project in detail: approximate surface, current condition, your wishes...",
            privacy_accept: "I accept the",
            privacy_link: "privacy policy",
            privacy_text: "and consent to the processing of my personal data.",
                submit: "Send request",
            response_time: "Response within 48h • Free quote • No obligation",
                success_title: "Thank you for your request!",
                success_message: "Your message is being processed. We will respond as soon as possible.",
                success_close: "Close"
            },
            info_title: "Contact Information",
            info: {
            address_label: "Address",
            phone_label: "Phone",
            email_label: "Email",
            hours_label: "Hours",
                hours_days: "Monday - Friday",
                hours_times: "7:30 AM - 6:00 PM",
                social_label: "Follow us"
            },
            zone: {
                title: "Service area",
                description: "We operate primarily in Geneva and in the canton of Vaud (Lausanne, Nyon, Montreux, Vevey and surrounding areas).",
                geneva: "✓ Geneva and nearby communes",
                lausanne: "✓ Lausanne and northern Vaud",
                montreux: "✓ Vaud Riviera (Montreux, Vevey)"
            },
            map_title: "Our Location"
        },
        about_page: {
            label: "Who we are",
            title: "About COLOSIMO PEINTURE",
            subtitle: "20 years of excellence in painting, wallpaper and plastering serving Geneva and the canton of Vaud",
            story_label: "Our story",
            story_title: "A passion became expertise",
            story_p1: "It all started with a passion. After 20 years spent perfecting the art of painting and decoration in Geneva, the founder of COLOSIMO PEINTURE established his own company in 2024. The vision was clear: to deliver a premium service where traditional craftsmanship meets the most modern techniques.",
            story_p2: "Today, with over 75 projects successfully completed \u2014 apartments, villas, offices, retail spaces \u2014 we bring the same exacting standards to every job. For us, each project is unique and deserves unwavering attention, from the very first brushstroke to the final finish.",
            story_p3: "Certified by the Federal Register, our company guarantees rigorous professionalism and full compliance with Swiss quality standards.",
            local_label: "Local presence",
            local_title: "Rooted in Geneva and active in the canton of Vaud",
            local_p1: "Our office located at <strong>Route de Colovrex 7, 1218 Le Grand-Saconnex</strong> allows us to efficiently serve Geneva, Lausanne, Nyon, Montreux, Vevey and the surrounding areas.",
            local_p2: "This geographical proximity allows us to offer a responsive and personalized service, with free site visits and rapid interventions.",
            local_zone_label: "Service area",
            local_zone_value: "Geneva and the canton of Vaud",
            local_hours_label: "Hours",
            local_hours_value: "Mon-Fri: 7:30 AM - 6:00 PM",
            team_label: "Our team",
            team_title: "A team of dedicated professionals",
            team_subtitle: "Four passionate experts at your service",
            team4_title: "Professional painter",
            team4_role: "Interior & exterior painting specialist",
            team4_bio: "Expert in residential and commercial painting. Excellence in finishing and meeting deadlines.",
            team1_title: "Founder & Director",
            team1_role: "Expert in painting and decoration",
            team1_bio: "20 years of experience in the sector. Specialized in high-end finishes and restoration.",
            team2_title: "Painter-decorator",
            team2_role: "Wallpaper specialist",
            team2_bio: "Expert in wallpaper installation and decorative techniques. Precision and creativity at the service of your projects.",
            team3_title: "Plasterer-stucco worker",
            team3_role: "Substrate specialist",
            team3_bio: "Perfect mastery of surface preparation and plastering work for impeccable bases.",
            values_label: "Our values",
            values_title: "What guides us",
            value1_title: "Precision",
            value1_desc: "Every brushstroke counts. We bring meticulous care to every detail to guarantee a perfect result.",
            value2_title: "Cleanliness",
            value2_desc: "Clean and organized site. Daily cleaning included and impeccable restoration at project end.",
            value3_title: "Respect for deadlines",
            value3_desc: "Rigorous planning and respect for commitments. Your project delivered on time.",
            value4_title: "Material quality",
            value4_desc: "Exclusive selection of premium paints and materials to ensure durability and aesthetics.",
            value5_title: "Transparency",
            value5_desc: "Clear communication, detailed quotes and honest advice to help you make the best choices.",
            value6_title: "Professionalism",
            value6_desc: "Qualified, insured and certified team. Full compliance with Swiss construction standards.",
            cert_label: "Certifications & warranties",
            cert_title: "Your peace of mind",
            cert1_title: "Federal Register",
            cert1_desc: "Official certification guaranteeing our compliance with Swiss quality and professionalism standards.",
            cert2_title: "Work guarantee",
            cert2_desc: "All our work is guaranteed. We intervene quickly in case of problems to ensure your total satisfaction.",
            cert3_title: "Liability insurance",
            cert3_desc: "Complete coverage for all our sites. Your property is protected throughout the duration of the work.",
            timeline_label: "Our journey",
            timeline_title: "Milestones and achievements",
            timeline1_title: "Beginning of experience",
            timeline1_desc: "The founder begins his career in the painting and decoration sector in Geneva.",
            timeline2_title: "Specialization",
            timeline2_desc: "In-depth training in advanced decorative techniques and restoration of historic buildings.",
            timeline3_title: "50+ projects",
            timeline3_desc: "Crossing the threshold of 50 successful projects with an established reputation in the Geneva region.",
            timeline4_title: "Creation of COLOSIMO PEINTURE",
            timeline4_desc: "Official foundation of the company with obtaining the Federal Register. Formation of a team of 4 professionals.",
            timeline5_title: "75+ projects completed",
            timeline5_desc: "Continuous expansion with a loyal clientele and increasingly ambitious projects throughout the Geneva region.",
            cta_title: "Ready to start your project?",
            cta_text: "Contact us for a free quote and discover how we can transform your space.",
            cta_quote: "Request a quote",
            cta_services: "View our services"
        },
        privacy_page: {
            label: "Legal information",
            title: "Privacy & Cookies Policy",
            subtitle: "Protection of your personal data and use of cookies",
            updated: "Last updated:",
            questions: "Questions about your data?",
            questions_text: "Our team is available to answer all your questions.",
            back_home: "Back to home"
        },
        cookies: {
            title: "We use cookies",
            message: "We use essential cookies for the proper functioning of our site and, with your consent, cookies to improve your experience.",
            learn_more: "Learn more",
            accept_all: "Accept all",
            decline_all: "Decline all",
            customize: "Customize",
            settings_title: "Cookie settings",
            settings_subtitle: "Choose the cookies you want to allow",
            necessary: "Necessary cookies",
            necessary_desc: "These cookies are essential for the site to function.",
            preferences: "Preference cookies",
            preferences_desc: "These cookies remember your choices and preferences.",
            analytics: "Analytics cookies",
            analytics_desc: "These cookies help us understand how you use our site.",
            marketing: "Marketing cookies",
            marketing_desc: "These cookies allow us to offer you adapted content.",
            required: "Required",
            cancel: "Cancel",
            save: "Save"
        },
        quote_popup: {
            title: "Request your free quote",
            subtitle: "Guaranteed response within 48h — No obligation"
        },
        gallery_cards: {
            renovation_apartment: {
                title: "Apartment Renovation",
                category: "Geneva | Apartment",
                desc: "Full repaint of 4 rooms with feature wallpaper in the living room"
            },
            facade_renovee: {
                title: "Renovated Façade",
                category: "Geneva | Exterior",
                desc: "High-performance exterior painting"
            },
            espace_commercial: {
                title: "UN — Assembly Hall",
                category: "Geneva | Institutional",
                desc: "Renovation of the UN Assembly Hall in Geneva"
            },
            tpg_tram: {
                title: "TPG — Geneva Tram",
                category: "Geneva | Transport",
                desc: "Creative decoration of the TPG Tram in Geneva"
            },
            salon_elegant: {
                title: "Elegant Living Room",
                category: "Geneva | Living room",
                desc: "Interior refresh with premium finishes"
            }
        }
    }
};

// === LANGUAGE SWITCHING ===
let currentLang = 'fr';
let translationsCache = {}; // Cache for compiled translations
let isTranslating = false; // Prevent concurrent translations

// Precompile translation paths for faster lookup
function precompileTranslations() {
    Object.keys(translations).forEach(lang => {
        translationsCache[lang] = {};
        flattenTranslations(translations[lang], '', translationsCache[lang]);
    });
}

// Flatten nested translations for O(1) lookup
function flattenTranslations(obj, prefix, result) {
    Object.keys(obj).forEach(key => {
        const value = obj[key];
        const newKey = prefix ? `${prefix}.${key}` : key;
        
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            flattenTranslations(value, newKey, result);
        } else {
            result[newKey] = value;
        }
    });
}

// Optimized nested translation getter
function getNestedTranslation(obj, path, lang = null) {
    // Validate inputs
    if (!obj || typeof obj !== 'object') {
        console.warn('Invalid translation object provided:', obj);
        return null;
    }
    
    if (!path || typeof path !== 'string') {
        console.warn('Invalid translation path provided:', path);
        return null;
    }
    
    // Determine which language to use for cache lookup
    const targetLang = lang || currentLang;
    
    // Use cache if available for the target language
    if (translationsCache[targetLang] && translationsCache[targetLang][path]) {
        return translationsCache[targetLang][path];
    }
    
    // Fallback to nested lookup from the provided object
    try {
        const result = path.split('.').reduce((current, key) => current?.[key], obj);
        return result || null;
    } catch (error) {
        console.warn('Error getting nested translation:', error, { path, lang: targetLang });
        return null;
    }
}

// Optimized language setter with batching and CSS transitions
function setLanguage(lang) {
    // Validate language parameter
    if (!lang || typeof lang !== 'string') {
        console.error('Invalid language parameter:', lang);
        return;
    }
    
    // Check if translations exist for this language
    if (!translations[lang]) {
        console.error('Translations not found for language:', lang);
        return;
    }
    
    // Prevent redundant changes and concurrent translations
    if (lang === currentLang || isTranslating) {
        return;
    }
    
    isTranslating = true;
    currentLang = lang;
    
    // Use requestAnimationFrame for smooth rendering
    requestAnimationFrame(() => {
        // Add transitioning class for smooth fade
        document.body.classList.add('lang-transitioning');
        
        // Update document attributes
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('data-lang', lang);
        
        // Batch DOM updates for better performance
        const updates = [];
        const elements = document.querySelectorAll('[data-i18n]');
        
        // Collect all updates first
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translationsCache[lang]?.[key] || getNestedTranslation(translations[lang], key, lang);
            
            if (translation && (translation.includes('<') ? element.innerHTML !== translation : element.textContent !== translation)) {
                updates.push({ element, translation, type: translation.includes('<') ? 'html' : 'text' });
            }
        });

        // Handle placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = translationsCache[lang]?.[key] || getNestedTranslation(translations[lang], key, lang);
            
            if (translation && element.placeholder !== translation) {
                updates.push({ element, translation, type: 'placeholder' });
            }
        });
        
        // Handle select options
        document.querySelectorAll('select option[data-i18n]').forEach(option => {
            const key = option.getAttribute('data-i18n');
            const translation = translationsCache[lang]?.[key] || getNestedTranslation(translations[lang], key, lang);
            
            if (translation && option.textContent !== translation) {
                updates.push({ element: option, translation, type: 'text' });
            }
        });
        
        // Apply all updates in one batch
        updates.forEach(({ element, translation, type }) => {
            try {
                if (type === 'placeholder') {
                    element.placeholder = translation;
                } else if (type === 'html') {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            } catch (error) {
                console.warn('Error updating element translation:', error, element);
            }
        });
        
        // Update language buttons
        try {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        } catch (error) {
            console.warn('Error updating language buttons:', error);
        }
        
        // Update cookie components if they exist
        try {
        updateCookieComponents();
        } catch (error) {
            console.warn('Error updating cookie components:', error);
        }
        
        // Save preference
        try {
            localStorage.setItem('preferred-language', lang);
        } catch (e) {
            console.warn('Could not save language preference:', e);
        }
        
        // Remove transition class after animation
        setTimeout(() => {
            try {
            document.body.classList.remove('lang-transitioning');
            isTranslating = false;
            } catch (error) {
                console.warn('Error removing transition class:', error);
                isTranslating = false;
            }
        }, 300);
        
        // Dispatch custom event for other components
        try {
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        } catch (error) {
            console.warn('Error dispatching languageChanged event:', error);
        }
    });
}

// Update cookie components efficiently
function updateCookieComponents() {
    // Update banner
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        updateElementTranslations(banner);
    }
    
    // Update modal
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        updateElementTranslations(modal);
    }
    
    // Update success modal translations if it exists and is visible
    const successModal = document.getElementById('successModal');
    if (successModal && successModal.classList.contains('show')) {
        updateModalTranslations();
    }
}

// Update translations for a specific element and its children
function updateElementTranslations(container) {
    if (!container) return;
    
    container.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translationsCache[currentLang]?.[key] || getNestedTranslation(translations[currentLang], key);
        if (translation) {
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Detect browser language and map to supported languages
function detectBrowserLanguage() {
    const supportedLanguages = ['fr', 'de', 'it', 'en'];
    
    // Get browser languages (array of language codes)
    const browserLanguages = navigator.languages || [navigator.language || navigator.userLanguage];
    
    // Try to find a match
    for (let browserLang of browserLanguages) {
        // Normalize: convert to lowercase and extract primary language code
        const langCode = browserLang.toLowerCase().split('-')[0];
        
        // Check if it's one of our supported languages
        if (supportedLanguages.includes(langCode)) {
            return langCode;
        }
    }
    
    // No match found, return null to use default
    return null;
}

// Initialize language switcher with optimization
document.addEventListener('DOMContentLoaded', () => {
    // Precompile translations once on load
    precompileTranslations();
    
    // Determine initial language: saved preference > browser language > default (fr)
    let initialLang = 'fr';
    
    // First, check for saved language preference (user's explicit choice takes priority)
    try {
        const storedLang = localStorage.getItem('preferred-language');
        if (storedLang && translations[storedLang]) {
            initialLang = storedLang;
        } else {
            // No saved preference, try to detect from browser
            const browserLang = detectBrowserLanguage();
            if (browserLang && translations[browserLang]) {
                initialLang = browserLang;
            }
        }
    } catch (e) {
        console.warn('Could not read language preference:', e);
        // Fallback to browser detection if localStorage fails
        const browserLang = detectBrowserLanguage();
        if (browserLang && translations[browserLang]) {
            initialLang = browserLang;
        }
    }
    
    // Validate initial language
    if (!translations[initialLang]) {
        console.warn('Initial language not found, defaulting to French:', initialLang);
        initialLang = 'fr';
    }
    
    // Ensure translations object exists
    if (!translations || typeof translations !== 'object') {
        console.error('Translations object not found or invalid');
        return;
    }
    
    // Set initial language (without animation on first load)
    currentLang = initialLang;
    document.documentElement.setAttribute('lang', initialLang);
    document.documentElement.setAttribute('data-lang', initialLang);
    
    // Update UI to reflect current language
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = translationsCache[initialLang]?.[key] || getNestedTranslation(translations[initialLang], key);
        if (translation) {
            if (translation.includes('<')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = translationsCache[initialLang]?.[key] || getNestedTranslation(translations[initialLang], key);
        if (translation) {
            element.placeholder = translation;
        }
    });
    
    // Update select options
    document.querySelectorAll('select option[data-i18n]').forEach(option => {
        const key = option.getAttribute('data-i18n');
        const translation = translationsCache[initialLang]?.[key] || getNestedTranslation(translations[initialLang], key);
        if (translation) {
            option.textContent = translation;
        }
    });
    
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === initialLang);
    });
    
    // Add click handlers directly to language buttons
    const langButtons = document.querySelectorAll('.lang-btn');
    if (langButtons.length === 0) {
        console.warn('No language buttons found on page');
    } else {
        langButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                try {
                    e.preventDefault();
                    e.stopPropagation();
                    
                const lang = btn.getAttribute('data-lang');
                    if (!lang) {
                        console.warn('Language button missing data-lang attribute:', btn);
                        return;
                    }
                    
                    if (!translations[lang]) {
                        console.error('Translations not found for language:', lang);
                        return;
                    }
                    
                    setLanguage(lang);
                } catch (error) {
                    console.error('Error handling language button click:', error);
            }
        });
    });
        console.log(`Language switcher initialized: ${langButtons.length} buttons found`);
    }
    
    // Preload critical translations for faster switching
    preloadCriticalTranslations();
});

// Preload critical translations that are most likely to be switched to
function preloadCriticalTranslations() {
    // This ensures all language data is ready in cache
    Object.keys(translations).forEach(lang => {
        if (!translationsCache[lang]) {
            translationsCache[lang] = {};
            flattenTranslations(translations[lang], '', translationsCache[lang]);
        }
    });
}

// === MOBILE MENU ===
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuToggle.classList.remove('active');
            nav.classList.remove('active');
        });
    });
}

// === HEADER SCROLL EFFECT ===
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// === SCROLL ANIMATIONS (old observer removed -- replaced by scroll-reveal system) ===

// === COUNTER ANIMATION ===
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = Math.ceil(target);
            clearInterval(timer);
        } else {
            element.textContent = Math.ceil(current);
        }
    }, 16);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const statsBanner = document.querySelector('.stats-banner');
    if (statsBanner) {
        statsObserver.observe(statsBanner);
    }
    const whyUsStats = document.querySelector('.why-us-stats');
    if (whyUsStats) {
        statsObserver.observe(whyUsStats);
    }
});

// === TIMELINE FADE-IN ON SCROLL ===
document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length === 0) return;

    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Find the index among all timeline items to stagger the delay
                const item = entry.target;
                const index = Array.from(timelineItems).indexOf(item);
                setTimeout(() => {
                    item.classList.add('timeline-visible');
                }, index * 200); // 200ms stagger between each item
                timelineObserver.unobserve(item);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    timelineItems.forEach(item => {
        timelineObserver.observe(item);
    });
});

// === SCROLL REVEAL ANIMATIONS (shared across all pages) ===
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.scroll-reveal');
    if (revealElements.length === 0) return;

    const scrollRevealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px'
    });

    revealElements.forEach(el => {
        scrollRevealObserver.observe(el);
    });
});

// === SMOOTH SCROLLING FOR ANCHOR LINKS ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.getElementById('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// === ACTIVE NAVIGATION HIGHLIGHTING ===
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    const scrollPosition = window.pageYOffset + 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// === FORM VALIDATION (for contact page) ===
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    // Email validation
    const emailInput = formElement.querySelector('input[type="email"]');
    if (emailInput && emailInput.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            isValid = false;
            emailInput.classList.add('error');
        }
    }
    
    // Phone validation (Swiss format) - more lenient
    const phoneInput = formElement.querySelector('input[type="tel"]');
    if (phoneInput && phoneInput.value) {
        const phoneRegex = /^(\+41|0041|0)[1-9\s\d]{9,}$/;
        if (!phoneRegex.test(phoneInput.value.replace(/\s/g, ''))) {
            // Don't block submission for phone validation - just warn
            phoneInput.classList.add('error');
            // Still allow form to submit
        } else {
            phoneInput.classList.remove('error');
        }
    }
    
    return isValid;
}

// === FAQ ACCORDION (for FAQ page) ===
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        if (question && answer) {
            question.addEventListener('click', () => {
                const isOpen = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = null;
                    }
                });
                
                // Toggle current item
                if (!isOpen) {
                    item.classList.add('active');
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                }
            });
        }
    });
}

// === GALLERY FILTER (for gallery page) ===
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length === 0 || galleryItems.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items with smooth transition
            galleryItems.forEach((item, index) => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                    // Stagger animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, index * 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

// === GALLERY CAROUSEL (for mobile) ===
function initGalleryCarousel() {
    const container = document.querySelector('.gallery-container');
    const masonry = document.querySelector('.gallery-masonry');
    const items = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.gallery-carousel-prev');
    const nextBtn = document.querySelector('.gallery-carousel-next');
    const indicators = document.querySelectorAll('.gallery-indicator');

    if (!container || !masonry || items.length === 0) return;

    // Track whether we initialized on a mobile / tablet viewport
    let isMobile = window.innerWidth <= 968;

    let currentIndex = 0;
    const totalItems = items.length;

    // Update carousel position with scroll
    function updateCarousel() {
        if (!items[currentIndex]) return;

        const itemWidth = items[0].offsetWidth;
        const gap = parseInt(getComputedStyle(masonry).gap || '0');
        const scrollPosition = currentIndex * (itemWidth + gap);

        masonry.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        updateIndicators();
    }
    
    // Update indicators
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    }
    
    // Go to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    }
    
    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    masonry.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    masonry.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe left - next
                nextSlide();
            } else {
                // Swipe right - previous
                prevSlide();
            }
        }
    }
    
    // Update on scroll (for snap scrolling)
    masonry.addEventListener('scroll', () => {
        const itemWidth = items[0].offsetWidth + parseInt(getComputedStyle(masonry).gap || '0');
        const newIndex = Math.round(masonry.scrollLeft / itemWidth);
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < totalItems) {
            currentIndex = newIndex;
            updateIndicators();
        }
    }, { passive: true });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Initialize
    updateIndicators();
    
    // Handle window resize – re-run carousel logic only when crossing to mobile
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const isNowMobile = window.innerWidth <= 968;
            // If we have just entered the mobile breakpoint, update the state
            // (carousel already works for all widths, but this avoids a ReferenceError
            // and keeps the logic ready if we later add desktop-only behavior)
            if (isNowMobile && !isMobile) {
                isMobile = true;
            } else if (!isNowMobile && isMobile) {
                isMobile = false;
            }
        }, 250);
    });
}

// === LIGHTBOX (for gallery page and home page) ===
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    let currentIndex = 0;
    let visibleItems = Array.from(galleryItems);
    let handleLightboxKeys;
    
    if (galleryItems.length === 0) return;
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Get only visible items for navigation
            visibleItems = Array.from(galleryItems).filter(item => 
                !item.classList.contains('hidden') && 
                item.style.opacity !== '0'
            );
            currentIndex = visibleItems.indexOf(item);
            if (currentIndex === -1) currentIndex = 0;
            openLightbox(item);
        });
    });
    
    function openLightbox(item) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        
        const imageContent = item.querySelector('.placeholder-image')?.outerHTML || item.innerHTML;
        const title = item.querySelector('.gallery-title')?.textContent || '';
        const category = item.querySelector('.gallery-category')?.textContent || '';
        const description = item.querySelector('.gallery-description')?.textContent || '';
        
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                <div class="lightbox-image-container">
                    ${imageContent}
                </div>
                ${visibleItems.length > 1 ? `
                    <div class="lightbox-nav">
                        <button class="lightbox-prev" aria-label="Previous image">‹</button>
                        <button class="lightbox-next" aria-label="Next image">›</button>
                    </div>
                ` : ''}
                <div class="lightbox-info">
                    <h3>${title}</h3>
                    <p style="font-size: 0.875rem; opacity: 0.9; margin-bottom: 0.5rem;">${category}</p>
                    <p>${description}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');

        // Close button
        lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
        
        // Navigation (only if more than one item)
        if (visibleItems.length > 1) {
            lightbox.querySelector('.lightbox-prev').addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
                updateLightboxContent(lightbox, visibleItems[currentIndex]);
            });
            
            lightbox.querySelector('.lightbox-next').addEventListener('click', (e) => {
                e.stopPropagation();
                currentIndex = (currentIndex + 1) % visibleItems.length;
                updateLightboxContent(lightbox, visibleItems[currentIndex]);
            });
        }
        
        // Close on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        // Touch swipe: swipe down to close, swipe left/right to navigate
        let touchStartX = 0;
        let touchStartY = 0;

        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].clientX;
            touchStartY = e.changedTouches[0].clientY;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            const absDx = Math.abs(dx);
            const absDy = Math.abs(dy);

            // Swipe down to close (must be more vertical than horizontal)
            if (absDy > 80 && absDy > absDx && dy > 0) {
                closeLightbox();
                return;
            }

            // Swipe left/right to navigate (must be more horizontal than vertical)
            if (visibleItems.length > 1 && absDx > 60 && absDx > absDy) {
                if (dx < 0) {
                    currentIndex = (currentIndex + 1) % visibleItems.length;
                } else {
                    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
                }
                updateLightboxContent(lightbox, visibleItems[currentIndex]);
            }
        }, { passive: true });
        
        // Keyboard navigation
        handleLightboxKeys = (e) => {
            if (e.key === 'Escape') {
                closeLightbox();
            }
            if (visibleItems.length > 1) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
                    const lightboxEl = document.querySelector('.lightbox');
                    if (lightboxEl) updateLightboxContent(lightboxEl, visibleItems[currentIndex]);
                }
                if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    currentIndex = (currentIndex + 1) % visibleItems.length;
                    const lightboxEl = document.querySelector('.lightbox');
                    if (lightboxEl) updateLightboxContent(lightboxEl, visibleItems[currentIndex]);
                }
            }
        };
        
        document.addEventListener('keydown', handleLightboxKeys);
    }
    
    function updateLightboxContent(lightbox, item) {
        const container = lightbox.querySelector('.lightbox-image-container');
        const info = lightbox.querySelector('.lightbox-info');
        
        const imageContent = item.querySelector('.placeholder-image')?.outerHTML || item.innerHTML;
        const title = item.querySelector('.gallery-title')?.textContent || '';
        const category = item.querySelector('.gallery-category')?.textContent || '';
        const description = item.querySelector('.gallery-description')?.textContent || '';
        
        container.innerHTML = imageContent;
        info.querySelector('h3').textContent = title;
        const categoryP = info.querySelector('p');
        if (categoryP) {
            categoryP.textContent = category;
            categoryP.style.fontSize = '0.875rem';
            categoryP.style.opacity = '0.9';
            categoryP.style.marginBottom = '0.5rem';
        }
        const descP = info.querySelectorAll('p')[1];
        if (descP) {
            descP.textContent = description;
        }
    }
    
    function closeLightbox() {
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) {
            lightbox.style.opacity = '0';
            setTimeout(() => {
                lightbox.remove();
                document.body.style.overflow = '';
                document.body.classList.remove('modal-open');
                document.removeEventListener('keydown', handleLightboxKeys);
            }, 300);
        }
    }
}

// === BEFORE/AFTER COMPARISON SLIDER ===
function initComparisonSlider() {
    const comparisonItem = document.querySelector('.comparison-item');
    if (!comparisonItem) return;
    
    const handle = comparisonItem.querySelector('.comparison-slider-handle');
    const beforeImage = comparisonItem.querySelector('.comparison-image.before');
    if (!handle || !beforeImage) return;
    
    let isDragging = false;
    let startX = 0;
    let currentX = 0;
    
    function updateSlider(x) {
        const rect = comparisonItem.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
        
        beforeImage.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
        handle.style.left = `${percentage}%`;
    }
    
    function handleMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        currentX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
        updateSlider(currentX);
    }
    
    function handleEnd() {
        isDragging = false;
        comparisonItem.style.cursor = 'grab';
    }
    
    function handleStart(e) {
        isDragging = true;
        comparisonItem.style.cursor = 'grabbing';
        // Remove pulse animation on first interaction
        comparisonItem.classList.add('dragging');
        startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
        currentX = startX;
        updateSlider(startX);
    }
    
    // Mouse events
    handle.addEventListener('mousedown', handleStart);
    comparisonItem.addEventListener('mousedown', (e) => {
        if (e.target === comparisonItem || e.target.closest('.comparison-image')) {
            handleStart(e);
        }
    });
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    
    // Touch events
    handle.addEventListener('touchstart', handleStart, { passive: false });
    comparisonItem.addEventListener('touchstart', (e) => {
        if (e.target === comparisonItem || e.target.closest('.comparison-image')) {
            handleStart(e);
        }
    }, { passive: false });
    document.addEventListener('touchmove', handleMove, { passive: false });
    document.addEventListener('touchend', handleEnd);
    
    // Set initial position
    updateSlider(comparisonItem.getBoundingClientRect().left + comparisonItem.offsetWidth / 2);
}

// === TESTIMONIALS CAROUSEL (all screens) ===
function initTestimonialsCarousel() {
    const carousel = document.querySelector('.testimonials-carousel');
    const track = document.querySelector('.testimonials-track');
    const cards = document.querySelectorAll('.testimonials-track .testimonial-card');
    const prevBtn = document.querySelector('.testimonials-prev');
    const nextBtn = document.querySelector('.testimonials-next');
    const progressFill = document.querySelector('.testimonials-progress-fill');
    const currentLabel = document.querySelector('.testimonials-current');
    const totalLabel = document.querySelector('.testimonials-total');

    if (!carousel || !track || cards.length === 0) return;

    let currentIndex = 0;
    let autoPlayInterval = null;
    const autoPlayDelay = 5000;
    const total = cards.length;

    // Set total count
    if (totalLabel) totalLabel.textContent = total;

    function getCardWidth() {
        if (!cards[0]) return 0;
        const style = getComputedStyle(track);
        const gap = parseInt(style.gap) || 0;
        return cards[0].offsetWidth + gap;
    }

    function updateProgress(index) {
        // Progress as percentage of the range (0 = first, total-1 = last)
        const pct = total <= 1 ? 100 : ((index) / (total - 1)) * 100;
        if (progressFill) progressFill.style.width = Math.max(8, pct) + '%';
        if (currentLabel) currentLabel.textContent = index + 1;
    }

    function scrollToIndex(index) {
        const cardWidth = getCardWidth();
        track.scrollTo({
            left: index * cardWidth,
            behavior: 'smooth'
        });
        currentIndex = index;
        updateProgress(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % total;
        scrollToIndex(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + total) % total;
        scrollToIndex(currentIndex);
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            nextSlide();
        }, autoPlayDelay);
    }

    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
            autoPlayInterval = null;
        }
    }

    function restartAutoPlay() {
        stopAutoPlay();
        setTimeout(() => startAutoPlay(), autoPlayDelay);
    }

    // Button listeners
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            restartAutoPlay();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            restartAutoPlay();
        });
    }

    // Track scroll detection for snap updates
    let scrollTimeout;
    track.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const cardWidth = getCardWidth();
            if (cardWidth === 0) return;
            const newIndex = Math.round(track.scrollLeft / cardWidth);
            if (newIndex !== currentIndex && newIndex >= 0 && newIndex < total) {
                currentIndex = newIndex;
                updateProgress(currentIndex);
            }
        }, 80);
    }, { passive: true });

    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        const threshold = 50;
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
        restartAutoPlay();
    }, { passive: true });

    // Pause auto-play on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);

    // Initialize
    updateProgress(0);
    startAutoPlay();
}

// === INITIALIZE PAGE-SPECIFIC FEATURES ===
document.addEventListener('DOMContentLoaded', () => {
    // Initialize FAQ accordion if on FAQ page
    if (document.querySelector('.faq-item')) {
        initFAQAccordion();
    }
    
    // Initialize comparison slider if on home page
    if (document.querySelector('.comparison-item')) {
        initComparisonSlider();
    }

    // Initialize testimonials carousel if on home page
    if (document.querySelector('.testimonials-carousel')) {
        initTestimonialsCarousel();
    }
    
    // Initialize gallery filter if on gallery page or home page
    if (document.querySelector('.filter-btn')) {
        initGalleryFilter();
    }
    
    // Initialize lightbox if on gallery page or home page
    if (document.querySelector('.gallery-item')) {
        initLightbox();
    }
    
    // Initialize gallery carousel for mobile
    if (document.querySelector('.gallery-container')) {
        initGalleryCarousel();
    }
    
    // Initialize form validation if contact form exists
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        // Set reply-to email dynamically from the email input
        const emailInput = contactForm.querySelector('input[name="email"]');
        const replyToInput = contactForm.querySelector('input[name="_replyto"]');
        const nextInput = contactForm.querySelector('input[name="_next"]');
        
        if (emailInput && replyToInput) {
            emailInput.addEventListener('change', () => {
                replyToInput.value = emailInput.value;
            });
            emailInput.addEventListener('input', () => {
                replyToInput.value = emailInput.value;
            });
        }
        
        // Set success redirect URL (current page with success parameter)
        if (nextInput) {
            const currentUrl = window.location.href.split('?')[0];
            nextInput.value = currentUrl + '?success=true';
        }
        
        contactForm.addEventListener('submit', (e) => {
            console.log('Form submit event triggered');
            
            // Ensure reply-to is set before submission
            if (emailInput && replyToInput && emailInput.value) {
                replyToInput.value = emailInput.value;
                console.log('Reply-to set to:', replyToInput.value);
            }
            
            // Validate required fields only (don't block on phone format)
            const requiredInputs = contactForm.querySelectorAll('input[required], textarea[required], select[required]');
            let hasErrors = false;
            
            requiredInputs.forEach(input => {
                if (!input.value.trim()) {
                    hasErrors = true;
                    input.classList.add('error');
                    console.log('Missing required field:', input.name);
                } else {
                    input.classList.remove('error');
                }
            });
            
            // Email format validation
            if (emailInput && emailInput.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value)) {
                    hasErrors = true;
                    emailInput.classList.add('error');
                    console.log('Invalid email format:', emailInput.value);
                } else {
                    emailInput.classList.remove('error');
                }
            }
            
            if (hasErrors) {
            e.preventDefault();
                console.log('Form validation failed, preventing submission');
                alert('Veuillez remplir tous les champs requis correctement.');
                return false;
            }
            
            // If form is valid, show success modal before submission
            console.log('Form is valid, submitting to FormSubmit...');
            console.log('Form action:', contactForm.action);
            
            // Show success modal immediately
            showSuccessModal();
            
            // Don't prevent default - let the form submit naturally to FormSubmit
        });
        
        // Show success message if redirected back with success parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('success') === 'true') {
            showSuccessModal();
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
});

// === UTILITY FUNCTIONS ===

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLanguage,
        validateForm,
        scrollToTop
    };
}

// === COOKIE BANNER MANAGEMENT ===

const COOKIE_CONSENT_KEY = 'cookie-consent';
const COOKIE_CONSENT_DATE_KEY = 'cookie-consent-date';
const COOKIE_CONSENT_VERSION = '1.0';

// Cookie consent object
let cookieConsent = {
    version: COOKIE_CONSENT_VERSION,
    necessary: true, // Always true, can't be disabled
    preferences: false,
    analytics: false,
    marketing: false
};

// Initialize cookie banner
function initCookieBanner() {
    console.log('Cookie banner initialization started');
    
    // Check if consent already given
    const existingConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    
    if (existingConsent) {
        console.log('Existing consent found:', existingConsent);
        try {
            cookieConsent = JSON.parse(existingConsent);
            // Check if consent is older than 13 months
            const consentDate = localStorage.getItem(COOKIE_CONSENT_DATE_KEY);
            if (consentDate) {
                const thirteenMonthsAgo = new Date();
                thirteenMonthsAgo.setMonth(thirteenMonthsAgo.getMonth() - 13);
                if (new Date(consentDate) < thirteenMonthsAgo) {
                    console.log('Consent expired, showing banner');
                    // Consent expired, show banner again
                    setTimeout(showCookieBanner, 1000);
                } else {
                    console.log('Consent still valid, not showing banner');
                }
            }
            // Apply cookie preferences
            applyCookiePreferences();
        } catch (e) {
            console.error('Error parsing consent:', e);
            // Invalid consent, show banner
            setTimeout(showCookieBanner, 1000);
        }
    } else {
        console.log('No consent found, showing banner after 1 second');
        // No consent yet, show banner after 1 second
        setTimeout(showCookieBanner, 1000);
    }
}

// Show cookie banner
function showCookieBanner() {
    console.log('showCookieBanner called');
    
    // Create banner if it doesn't exist
    if (!document.getElementById('cookieBanner')) {
        console.log('Creating cookie banner');
        createCookieBanner();
    }
    
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        console.log('Banner found, showing it');
        setTimeout(() => {
            banner.classList.add('show');
        }, 100);
    } else {
        console.error('Banner element not found!');
    }
}

// Create cookie banner HTML
function createCookieBanner() {
    const banner = document.createElement('div');
    banner.id = 'cookieBanner';
    banner.className = 'cookie-banner';
    banner.innerHTML = `
        <div class="cookie-banner-content">
            <div class="cookie-banner-header">
                <div class="cookie-icon">🍪</div>
                <div class="cookie-title">
                    <h3 data-i18n="cookies.title">Nous utilisons des cookies</h3>
                </div>
            </div>
            <div class="cookie-message">
                <p><span data-i18n="cookies.message">Nous utilisons des cookies essentiels pour le bon fonctionnement de notre site et, avec votre consentement, des cookies pour améliorer votre expérience.</span>
                <a href="privacy.html" data-i18n="cookies.learn_more">En savoir plus</a></p>
            </div>
            <div class="cookie-banner-actions">
                <button class="cookie-btn cookie-btn-accept" onclick="acceptAllCookies()" data-i18n="cookies.accept_all">Tout accepter</button>
                <div class="cookie-actions-row">
                    <button class="cookie-btn cookie-btn-secondary" onclick="declineAllCookies()" data-i18n="cookies.decline_all">Tout refuser</button>
                    <button class="cookie-btn cookie-btn-secondary" onclick="openCookieSettings()" data-i18n="cookies.customize">Personnaliser</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(banner);
    
    // Apply current language translations to banner
    updateElementTranslations(banner);
    
    // Also create the settings modal
    createCookieSettingsModal();
}

// Create cookie settings modal
function createCookieSettingsModal() {
    const modal = document.createElement('div');
    modal.id = 'cookieSettingsModal';
    modal.className = 'cookie-settings-modal';
    modal.innerHTML = `
        <div class="cookie-settings-content">
            <div class="cookie-settings-header">
                <h3 data-i18n="cookies.settings_title">Paramètres des cookies</h3>
                <p data-i18n="cookies.settings_subtitle">Choisissez les cookies que vous souhaitez autoriser</p>
            </div>
            <div class="cookie-settings-body">
                <!-- Necessary Cookies -->
                <div class="cookie-category required">
                    <div class="cookie-category-header">
                        <h4>🔒 <span data-i18n="cookies.necessary">Cookies nécessaires</span></h4>
                        <label class="cookie-toggle">
                            <input type="checkbox" checked disabled>
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <p class="cookie-category-desc" data-i18n="cookies.necessary_desc">
                        Ces cookies sont indispensables au fonctionnement du site.
                    </p>
                </div>

                <!-- Preference Cookies -->
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <h4>⚙️ <span data-i18n="cookies.preferences">Cookies de préférences</span></h4>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookiePrefPref">
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <p class="cookie-category-desc" data-i18n="cookies.preferences_desc">
                        Ces cookies permettent de mémoriser vos choix et préférences.
                    </p>
                </div>

                <!-- Analytics Cookies -->
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <h4>📊 <span data-i18n="cookies.analytics">Cookies analytiques</span></h4>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookiePrefAnalytics">
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <p class="cookie-category-desc" data-i18n="cookies.analytics_desc">
                        Ces cookies nous aident à comprendre comment vous utilisez notre site.
                    </p>
                </div>

                <!-- Marketing Cookies -->
                <div class="cookie-category">
                    <div class="cookie-category-header">
                        <h4>🎯 <span data-i18n="cookies.marketing">Cookies marketing</span></h4>
                        <label class="cookie-toggle">
                            <input type="checkbox" id="cookiePrefMarketing">
                            <span class="cookie-toggle-slider"></span>
                        </label>
                    </div>
                    <p class="cookie-category-desc" data-i18n="cookies.marketing_desc">
                        Ces cookies permettent de vous proposer des contenus adaptés.
                    </p>
                </div>
            </div>
            <div class="cookie-settings-footer">
                <button class="cookie-btn cookie-btn-decline" onclick="closeCookieSettings()" data-i18n="cookies.cancel">Annuler</button>
                <button class="cookie-btn cookie-btn-accept" onclick="saveCustomCookiePreferences()" data-i18n="cookies.save">Enregistrer</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Apply current language translations to modal
    updateElementTranslations(modal);
    
    // Close modal on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeCookieSettings();
        }
    });
}

// Accept all cookies
function acceptAllCookies() {
    cookieConsent = {
        version: COOKIE_CONSENT_VERSION,
        necessary: true,
        preferences: true,
        analytics: true,
        marketing: true
    };
    saveCookieConsent();
    hideCookieBanner();
    applyCookiePreferences();
}

// Decline all non-necessary cookies
function declineAllCookies() {
    cookieConsent = {
        version: COOKIE_CONSENT_VERSION,
        necessary: true,
        preferences: false,
        analytics: false,
        marketing: false
    };
    saveCookieConsent();
    hideCookieBanner();
    applyCookiePreferences();
}

// Open cookie settings modal
function openCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        // Set current preferences
        document.getElementById('cookiePrefPref').checked = cookieConsent.preferences;
        document.getElementById('cookiePrefAnalytics').checked = cookieConsent.analytics;
        document.getElementById('cookiePrefMarketing').checked = cookieConsent.marketing;
        
        modal.classList.add('show');
    }
}

// Close cookie settings modal
function closeCookieSettings() {
    const modal = document.getElementById('cookieSettingsModal');
    if (modal) {
        modal.classList.remove('show');
    }
}

// Save custom cookie preferences
function saveCustomCookiePreferences() {
    cookieConsent = {
        version: COOKIE_CONSENT_VERSION,
        necessary: true,
        preferences: document.getElementById('cookiePrefPref').checked,
        analytics: document.getElementById('cookiePrefAnalytics').checked,
        marketing: document.getElementById('cookiePrefMarketing').checked
    };
    saveCookieConsent();
    closeCookieSettings();
    hideCookieBanner();
    applyCookiePreferences();
}

// Save cookie consent to localStorage
function saveCookieConsent() {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(cookieConsent));
    localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString());
}

// Hide cookie banner
function hideCookieBanner() {
    const banner = document.getElementById('cookieBanner');
    if (banner) {
        banner.classList.remove('show');
        setTimeout(() => {
            banner.remove();
        }, 400);
    }
}

// Apply cookie preferences
function applyCookiePreferences() {
    // This is where you would enable/disable actual tracking scripts
    // For now, we just log the preferences
    console.log('Cookie preferences applied:', cookieConsent);
    
    // Example: Load Google Analytics only if analytics cookies accepted
    if (cookieConsent.analytics) {
        // loadGoogleAnalytics();
    }
    
    // Example: Load marketing pixels only if marketing cookies accepted
    if (cookieConsent.marketing) {
        // loadMarketingPixels();
    }
}

// Reopen cookie banner (for settings page)
function reopenCookieBanner() {
    // Remove existing consent
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_CONSENT_DATE_KEY);
    
    // Show banner again
    showCookieBanner();
}

// Make functions globally available
window.acceptAllCookies = acceptAllCookies;
window.declineAllCookies = declineAllCookies;
window.openCookieSettings = openCookieSettings;
window.closeCookieSettings = closeCookieSettings;
window.saveCustomCookiePreferences = saveCustomCookiePreferences;
window.reopenCookieBanner = reopenCookieBanner;

// Force show banner (for testing/debugging)
window.forceShowCookieBanner = function() {
    console.log('Force showing cookie banner');
    localStorage.removeItem(COOKIE_CONSENT_KEY);
    localStorage.removeItem(COOKIE_CONSENT_DATE_KEY);
    showCookieBanner();
};

// === SUCCESS MODAL FUNCTIONS ===
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.style.display = 'flex';
        // Trigger animation
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
        
        // Update translations in modal
        updateModalTranslations();
    }
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

function updateModalTranslations() {
    const modal = document.getElementById('successModal');
    if (!modal) return;
    
    const title = modal.querySelector('.success-modal-title');
    const message = modal.querySelector('.success-modal-message');
    const closeBtn = modal.querySelector('.success-modal-content .btn');
    
    if (title) {
        const titleText = translations[currentLang]?.contact_page?.form?.success_title || 
                         'Merci pour votre demande !';
        title.textContent = titleText;
    }
    
    if (message) {
        const messageText = translations[currentLang]?.contact_page?.form?.success_message || 
                           'Votre message est en cours de traitement. Nous vous répondrons dans les plus brefs délais.';
        message.textContent = messageText;
    }
    
    if (closeBtn) {
        const closeText = translations[currentLang]?.contact_page?.form?.success_close || 
                         'Fermer';
        closeBtn.textContent = closeText;
    }
}

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('successModal');
    if (modal && e.target === modal) {
        closeSuccessModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('successModal');
        if (modal && modal.classList.contains('show')) {
            closeSuccessModal();
        }
    }
});

// Make functions globally available
window.showSuccessModal = showSuccessModal;
window.closeSuccessModal = closeSuccessModal;

// ================================================
// QUOTE REQUEST POPUP MODAL
// ================================================

function closeMobileMenu() {
    const nav = document.getElementById('nav');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (nav) nav.classList.remove('active');
    if (mobileMenuToggle) mobileMenuToggle.classList.remove('active');
}

function openQuoteModal(serviceType = null) {
    const modal = document.getElementById('quoteModal');
    if (!modal) return;
    
    // Prevent background scroll
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
    
    // Show modal
    modal.style.display = 'flex';
    
    // Force browser reflow before adding show class for animation
    void modal.offsetHeight;
    
    // Trigger entrance animation
    requestAnimationFrame(() => {
        modal.classList.add('show');
    });
    
    // Apply translations to the modal form
    applyQuoteModalTranslations();
    
    // Initialize form handler if not already done
    initQuoteModalForm();
    
    // Auto-select service type if provided
    if (serviceType) {
        // Mapping from service IDs to select option values
        const serviceTypeMap = {
            'internal': 'peinture-interne',
            'external': 'peinture-externe',
            'wallpaper': 'papier-peint',
            'decoration': 'decorations',
            'lissage': 'lissage',
            'antimoisissure': 'antimoisissure',
            'peintures-speciales': 'peintures-speciales',
            'restaurations': 'restaurations',
            'gypserie': 'gypserie'
        };
        
        const selectValue = serviceTypeMap[serviceType];
        if (selectValue) {
            const projectTypeSelect = modal.querySelector('select[name="project_type"]');
            if (projectTypeSelect) {
                projectTypeSelect.value = selectValue;
            }
        }
    }
}

function closeQuoteModal() {
    const modal = document.getElementById('quoteModal');
    if (!modal) return;
    
    // Remove show class to trigger exit animation
    modal.classList.remove('show');
    
    // Restore scrolling
    document.body.style.overflow = '';
    document.body.classList.remove('modal-open');
    
    // Reset project type select to empty for clean state
    const projectTypeSelect = modal.querySelector('select[name="project_type"]');
    if (projectTypeSelect) {
        projectTypeSelect.value = '';
    }
    
    // Hide after animation completes
    setTimeout(() => {
        modal.style.display = 'none';
    }, 450);
}

function applyQuoteModalTranslations() {
    const modal = document.getElementById('quoteModal');
    if (!modal || !translations[currentLang]) return;
    
    // Apply translations using data-i18n attributes
    const elements = modal.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = getNestedTranslation(translations[currentLang], key, currentLang);
        if (text) {
            if (el.tagName === 'OPTION') {
                el.textContent = text;
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                // skip - handled by placeholder
            } else {
                el.textContent = text;
            }
        }
    });
    
    // Apply placeholder translations
    const placeholderElements = modal.querySelectorAll('[data-i18n-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = getNestedTranslation(translations[currentLang], key, currentLang);
        if (text) {
            el.placeholder = text;
        }
    });
}

let quoteFormInitialized = false;

function initQuoteModalForm() {
    if (quoteFormInitialized) return;
    
    const form = document.getElementById('quoteModalForm');
    if (!form) return;
    
    quoteFormInitialized = true;
    
    // Dynamic reply-to sync
    const emailInput = form.querySelector('input[name="email"]');
    const replyToInput = form.querySelector('input[name="_replyto"]');
    const nextInput = form.querySelector('input[name="_next"]');
    
    if (emailInput && replyToInput) {
        emailInput.addEventListener('input', () => {
            replyToInput.value = emailInput.value;
        });
    }
    
    // Set success redirect URL
    if (nextInput) {
        const currentUrl = window.location.href.split('?')[0].split('#')[0];
        nextInput.value = currentUrl + '?quote_success=true';
    }
    
    // Form submission handler
    form.addEventListener('submit', (e) => {
        console.log('Quote modal form submit triggered');
        
        // Sync reply-to before submission
        if (emailInput && replyToInput && emailInput.value) {
            replyToInput.value = emailInput.value;
        }
        
        // Validate required fields
        const requiredInputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let hasErrors = false;
        
        requiredInputs.forEach(input => {
            if (!input.value.trim()) {
                hasErrors = true;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });
        
        // Validate email format
        if (emailInput && emailInput.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                hasErrors = true;
                emailInput.classList.add('error');
            }
        }
        
        // Validate checkbox
        const checkbox = form.querySelector('input[type="checkbox"][required]');
        if (checkbox && !checkbox.checked) {
            hasErrors = true;
        }
        
        if (hasErrors) {
            e.preventDefault();
            
            // Shake animation on first error field
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.style.animation = 'none';
                void firstError.offsetHeight;
                firstError.style.animation = 'quoteShake 0.5s ease';
                firstError.focus();
            }
            return false;
        }
        
        // Show loading state
        const submitBtn = form.querySelector('.quote-modal-submit');
        if (submitBtn) {
            submitBtn.classList.add('loading');
        }
        
        // Close quote modal before form submits
        closeQuoteModal();
        
        // Show success modal
        setTimeout(() => {
            showSuccessModal();
        }, 500);
        
        // Let the form submit naturally to FormSubmit
        console.log('Quote form valid, submitting to FormSubmit...');
    });
    
    // Close modal listeners
    const overlay = modal => modal.querySelector('.quote-modal-overlay');
    const modal = document.getElementById('quoteModal');
    
    if (modal) {
        const overlayEl = overlay(modal);
        if (overlayEl) {
            overlayEl.addEventListener('click', closeQuoteModal);
        }
    }
    
    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const quoteModal = document.getElementById('quoteModal');
            if (quoteModal && quoteModal.classList.contains('show')) {
                closeQuoteModal();
            }
        }
    });
    
    // Remove error styling on input
    form.querySelectorAll('.form-input, .form-select, .form-textarea').forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.remove('error');
            input.style.animation = '';
        });
    });
}

// Expose functions globally
window.openQuoteModal = openQuoteModal;
window.closeQuoteModal = closeQuoteModal;
window.closeMobileMenu = closeMobileMenu;

// Check for quote_success parameter on page load
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('quote_success') === 'true') {
        showSuccessModal();
        // Clean URL
        window.history.replaceState({}, document.title, window.location.pathname);
    }
});

// Initialize cookie banner on page load
document.addEventListener('DOMContentLoaded', initCookieBanner);

// Also expose init function for manual testing
window.initCookieBanner = initCookieBanner;

// ================================================
// HERO CAROUSEL FUNCTIONALITY
// ================================================

(function() {
    let currentSlide = 0;
    let carouselInterval = null;
    const slideInterval = 5000; // 5 seconds between slides
    let isPaused = false;

    function initHeroCarousel() {
        const slides = document.querySelectorAll('.hero-slide');
        const indicators = document.querySelectorAll('.carousel-indicator');
        const prevBtn = document.querySelector('.carousel-prev');
        const nextBtn = document.querySelector('.carousel-next');
        const heroSection = document.querySelector('.hero');

        if (slides.length === 0) return;

        // Function to show a specific slide
        function showSlide(index) {
            // Remove active class from all slides and indicators
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
                if (indicators[i]) {
                    indicators[i].classList.remove('active');
                }
            });

            // Add active class to current slide and indicator
            if (slides[index]) {
                slides[index].classList.add('active');
            }
            if (indicators[index]) {
                indicators[index].classList.add('active');
            }

            currentSlide = index;
        }

        // Function to go to next slide
        function nextSlide() {
            const nextIndex = (currentSlide + 1) % slides.length;
            showSlide(nextIndex);
        }

        // Function to go to previous slide
        function prevSlide() {
            const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(prevIndex);
        }

        // Function to start auto-play
        function startAutoPlay() {
            if (carouselInterval) {
                clearInterval(carouselInterval);
            }
            carouselInterval = setInterval(() => {
                if (!isPaused) {
                    nextSlide();
                }
            }, slideInterval);
        }

        // Function to pause auto-play
        function pauseAutoPlay() {
            isPaused = true;
        }

        // Function to resume auto-play
        function resumeAutoPlay() {
            isPaused = false;
        }

        // Event listeners for navigation buttons
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                pauseAutoPlay();
                setTimeout(() => {
                    resumeAutoPlay();
                    startAutoPlay();
                }, slideInterval);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                prevSlide();
                pauseAutoPlay();
                setTimeout(() => {
                    resumeAutoPlay();
                    startAutoPlay();
                }, slideInterval);
            });
        }

        // Event listeners for indicators
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                pauseAutoPlay();
                setTimeout(() => {
                    resumeAutoPlay();
                    startAutoPlay();
                }, slideInterval);
            });
        });

        // Pause on hover
        if (heroSection) {
            heroSection.addEventListener('mouseenter', pauseAutoPlay);
            heroSection.addEventListener('mouseleave', resumeAutoPlay);
        }

        // Pause when page is not visible (tab switch)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                pauseAutoPlay();
            } else {
                resumeAutoPlay();
                startAutoPlay();
            }
        });

        // Touch/swipe support for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        if (heroSection) {
            heroSection.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
            }, { passive: true });

            heroSection.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
            }, { passive: true });
        }

        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - previous slide
                    prevSlide();
                }
                pauseAutoPlay();
                setTimeout(() => {
                    resumeAutoPlay();
                    startAutoPlay();
                }, slideInterval);
            }
        }

        // Initialize first slide
        showSlide(0);
        
        // Start auto-play
        startAutoPlay();
    }

    // Initialize carousel when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHeroCarousel);
    } else {
        initHeroCarousel();
    }
})();

// ================================================
// WHATSAPP FLOATING BUTTON
// ================================================

const whatsappMessages = {
    fr: `Bonjour,

Je souhaiterais recevoir un devis gratuit pour le service suivant :

- [ ] Peinture interne
- [ ] Peinture externe
- [ ] Pose de papier peint
- [ ] Decorations artistiques
- [ ] Gypserie / Lissage
- [ ] Autre : ___

Merci de votre retour !`,
    de: `Guten Tag,

Ich m\u00f6chte gerne ein kostenloses Angebot f\u00fcr folgende Dienstleistung erhalten:

- [ ] Innenanstrich
- [ ] Aussenanstrich
- [ ] Tapezierarbeiten
- [ ] K\u00fcnstlerische Dekorationen
- [ ] Gipserei / Gl\u00e4ttung
- [ ] Andere: ___

Vielen Dank f\u00fcr Ihre R\u00fcckmeldung!`,
    it: `Buongiorno,

Vorrei ricevere un preventivo gratuito per il seguente servizio:

- [ ] Pittura interna
- [ ] Pittura esterna
- [ ] Posa di carta da parati
- [ ] Decorazioni artistiche
- [ ] Gessatura / Lisciatura
- [ ] Altro: ___

Grazie per il vostro riscontro!`,
    en: `Hello,

I would like to receive a free quote for the following service:

- [ ] Interior painting
- [ ] Exterior painting
- [ ] Wallpaper installation
- [ ] Artistic decorations
- [ ] Plastering / Smoothing
- [ ] Other: ___

Thank you for your reply!`
};

function initWhatsAppButton() {
    const btn = document.getElementById('whatsappBtn');
    if (!btn) return;

    function getWhatsAppUrl() {
        const lang = currentLang || 'fr';
        const message = whatsappMessages[lang] || whatsappMessages.fr;
        return 'https://wa.me/41787187161?text=' + encodeURIComponent(message);
    }

    function updateWhatsAppLink() {
        btn.href = getWhatsAppUrl();
    }

    // Set initial link
    updateWhatsAppLink();

    // Direct click handler as fallback for reliability
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = getWhatsAppUrl();
    });

    // Update link when language changes
    window.addEventListener('languageChanged', updateWhatsAppLink);
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', initWhatsAppButton);
// === OPENING HOURS BADGE ===
// Mon–Fri 07:30–18:00 Swiss local time (Europe/Zurich)
(function () {
    function isOpen() {
        // Use Swiss timezone
        const now = new Date();
        const zurich = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Europe/Zurich',
            hour: 'numeric',
            minute: 'numeric',
            weekday: 'short',
            hour12: false
        }).formatToParts(now);

        const parts = {};
        zurich.forEach(p => { parts[p.type] = p.value; });

        const weekday = parts.weekday; // 'Mon'–'Sun'
        const hour    = parseInt(parts.hour,   10);
        const minute  = parseInt(parts.minute, 10);

        const isWeekday = !['Sat', 'Sun'].includes(weekday);
        const totalMins = hour * 60 + minute;
        const openMins  = 7  * 60 + 30;  // 07:30
        const closeMins = 18 * 60;        // 18:00

        return isWeekday && totalMins >= openMins && totalMins < closeMins;
    }

    function updateBadge() {
        const badge = document.getElementById('hours-badge');
        if (!badge) return;

        const lang   = window.currentLang || 'fr';
        const t      = window.translations && window.translations[lang]
                        && window.translations[lang].contact;
        const open   = isOpen();

        badge.textContent = open
            ? (t && t.open_badge   || 'Ouvert')
            : (t && t.closed_badge || 'Fermé');

        badge.classList.toggle('is-closed', !open);
    }

    // Run on load and every minute
    document.addEventListener('DOMContentLoaded', function () {
        updateBadge();
        setInterval(updateBadge, 60 * 1000);
    });

    // Re-run when language changes so the text updates too
    window.addEventListener('languageChanged', updateBadge);
}());
