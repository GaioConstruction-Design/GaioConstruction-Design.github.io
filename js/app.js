/* ============================================================
   GaioConstruction Design — vanilla JS
   Handles: language toggle (EL/EN), sticky-nav state,
   mobile menu, tweaks panel (accent / density / theme).
   ============================================================ */

(function () {
  'use strict';

  // ---------- Translations ----------
  // Keys are referenced via data-i18n="key" on elements.
  // For attributes use data-i18n-attr="placeholder:formPlaceholder,aria-label:srLabel".
  const I18N = {
    el: {
      'nav.home':         'Αρχική',
      'nav.about':        'Σχετικά',
      'nav.services':     'Υπηρεσίες',
      'nav.tools':        'Λογισμικά/εξοπλισμός',
      'nav.projects':     'Έργα',
      'nav.contact':      'Επικοινωνία',
      'cta.cv':           'Λήψη CV',
      'cta.contact':      'Επικοινωνία',
      'cta.services':     'Δείτε υπηρεσίες',
      'cta.viewProject':  'Δείτε το έργο',
      'cta.send':         'Αποστολή μηνύματος',

      'brand.tagline':    'Γεωτεχνική · Στατική · Υδραυλική',

      'hero.eyebrow':     'GaioConstruction Design',
      'hero.h1.l1':       'Όπου το έδαφος',
      'hero.h1.accent':   'συναντά',
      'hero.h1.l2':       'την κατασκευή',
      'hero.lead':        'Εξειδικευμένες γεωτεχνικές, στατικές και υδραυλικές μελέτες για έργα υποδομής πολιτικού μηχανικού — με 24+ χρόνια εμπειρίας στην αλληλεπίδραση εδάφους–κατασκευής.',
      'hero.meta.title':  'Πάτρα, Ελλάδα',
      'hero.meta.sub':    'Μελέτες · Υπηρεσίες · Επιτόπου υποστήριξη',

      'cred.years':       'Χρόνια εμπειρίας',
      'cred.projects':    'Μελετημένα έργα',
      'cred.specialty':   'Εξειδίκευση',
      'cred.specialty.value': 'Γεωτεχνική Μηχανική',
      'cred.education':   'Πολυτεχνική Σχολή, Πανεπιστήμιο Πατρών',
      'cred.education.value': 'MSc',

      'about.num':        'Σχετικά',
      'about.h2':         'Πολιτικός Μηχανικός M.Sc. με εξειδίκευση στη γεωτεχνική & υδραυλική μηχανική',
      'about.intro':      'Από το 2002 παρέχω ολοκληρωμένες λύσεις σε έργα όπου η συμπεριφορά του εδάφους είναι κρίσιμη — από αντιστηρίξεις και θεμελιώσεις έως λιμενικά έργα και υδραυλικά συστήματα.',
      'about.lead':       'Μόνιμη συνεργασία με μηχανικούς άλλων ειδικοτήτων, γεωλόγους και κατασκευαστικές εταιρείες για να μετατρέπονται σύνθετα γεωτεχνικά προβλήματα σε υλοποιήσιμες, ασφαλείς και οικονομικές μελέτες.',
      'about.body':       'Εξειδίκευση που επικεντρώνεται στην αλληλεπίδραση εδάφους–κατασκευής, έναν τομέα όπου η ανάλυση απαιτεί συνδυασμό εμπειρίας, επί-τόπου ερευνών, εργαστηριακών δοκιμών γεωυλικών και αξιόπιστων αριθμητικών προσομοιώσεων. Από το 2002 έχω συμβάλει σε έργα κάθε κλίμακας, από ιδιωτικές κατοικίες έως δημόσια έργα υποδομής και ερευνητικά έργα.',
      'about.body2':      'Παροχή επιτόπου υποστήριξης και συμβουλευτικής κατά την υλοποίηση του έργου, όταν οι συνθήκες πεδίου διαφέρουν από αυτές της μελέτης ή απαιτείται γρήγορη λήψη απόφασης σε δύσκολες εδαφικές συνθήκες.',
      'about.bio.0.year': '2002',
      'about.bio.0.text': '<b>Διπλωματούχος Πολιτικός Μηχανικός</b>, Πολυτεχνική Σχολή, Πανεπιστήμιο Πατρών.',
      'about.bio.1.year': '2004',
      'about.bio.1.text': '<b>Μεταπτυχιακό Δίπλωμα Ειδίκευσης</b> σε Έργα Υποδομής Πολιτικού Μηχανικού<br>(τομέας Γεωτεχνικής Μηχανικής & Υδραυλικής Μηχανικής, Παν. Πατρών).',
      'about.bio.2.year': '2018–2025',
      'about.bio.2.text': '<b>Προιστάμενος Τμήματος Μελετών-Έργων<br></b>Δ/νση Ύδρευσης, ΔΕΥΑ Πάτρας.',
      'about.bio.3.year': '2004–Σήμερα',
      'about.bio.3.text': '<b>Μελέτες Γεωτεχνικών & Υδραυλικών Έργων: </b>Mελέτες & υπηρεσίες για ιδιώτες, μηχανικούς, δημόσιο και κατασκευαστικές εταιρείες.',
      'about.portrait.caption.l': 'V. Vlachakis',
      'about.portrait.caption.r': 'PE · M.Sc.',

      'services.num':     'Υπηρεσίες',
      'services.h2':      'Έξι τομείς εξειδικευμένης παροχής.',
      'services.intro':   'Από τη φάση της προμελέτης μέχρι την επιτόπου επίβλεψη — υπηρεσίες που εκπονούνται με χρήση κατάλληλων λογισμικών και βασίζονται σε επιτόπου έρευνα.',

      'service.1.title':  'Συμβουλευτική',
      'service.1.desc':   'Υποστήριξη σε έργα όπου το έδαφος απαιτεί εξειδικευμένη γνώση. Ανάλυση κινδύνου, εκτίμηση εναλλακτικών λύσεων και τεκμηριωμένες προτάσεις προς ιδιώτες, μηχανικούς, δημόσιες υπηρεσίες και εργολάβους.',
      'service.2.title':  'Γεωτεχνική έρευνα',
      'service.2.desc':   'Διάνοιξη ερευνητικών δειγματοληπτικών γεωτρήσεων, φρεάτων, εκτέλεση επιτόπου δοκιμών αντοχής, διαπερατότητας και χαρακτηρισμού του εδάφους. Λήψη αντιπροσωπευτικών δειγμάτων για εργαστηριακές δοκιμές σε συνεργαζόμενα πιστοποιημένα εργαστήρια εδαφομηχανικής/βραχομηχανικής.',
      'service.3.title':  'Γεωφυσική έρευνα',
      'service.3.desc':   'Εφαρμογή μη καταστροφικών ερευνητικών μεθόδων επιφανειακών κυμάτων MASW και ReMi για τον προσδιορισμό της κατανομής Vs-depth profile, της κατηγορίας εδάφους θεμελίωσης και του ελαστικού φάσματος απόκρισης κατά EC-8.',
      'service.4.title':  'Υποβρύχια αυτοψία',
      'service.4.desc':   'Υποβρύχια επισκόπηση λιμενικών έργων, τεκμηρίωση διαστάσεων υφιστάμενων και νέων κατασκευών, φωτογραφική και βιντεοσκοπική τεκμηρίωση, τεχνική έκθεση αυτοψίας. Bυθομετρική αποτύπωση με sonar και συμβατικές μεθόδους σε λιμενικά έργα.',
      'service.5.title':  'Μελέτες',
      'service.5.desc':   'Εξειδικευμένες Γεωτεχνικές Μελέτες θεμελίωσης κατασκευών, αντιστήριξης εδάφους, ευστάθειας πρανών και αποκατάστασης κατολισθήσεων, βραχοπτώσεων.\nΣτατικές μελέτες διαστασιολόγησης και όπλισης έργων αντιστήριξης (πασσάλων, τοιχείων).\nMελέτες υδραυλικών δικτύων.',
      'service.6.title':  'Υποστήριξη έργων',
      'service.6.desc':   'Επιτόπου υποστήριξη μετά τη σύνταξη της μελέτης, εκτίμηση κατάστασης σε δύσκολες εδαφικές συνθήκες και καθοδήγηση της κατασκευαστικής διαδικασίας.',

      'tools.num':        'Λογισμικά & εξοπλισμός',
      'tools.h2':         'Εργαλεία ανάλυσης και εξοπλισμός πεδίου',
      'tools.intro':      'Χρήση επαγγελματικών λογισμικών Γεωτεχνικής & Υδραυλικής Μηχανικής και εξοπλισμού επι-τόπου δοκιμών έρευνας που υποστηρίζουν τις μελέτες.',
      'tool.plaxis.desc': 'Λογισμικό Πεπερασμένων στοιχείων για αναλύσεις συμπεριφοράς εδάφους - κατασκευής. Υπολογισμός τάσεων - παραμορφώσεων - εντατικών μεγεθών καταπόνησης δομικών στοιχείων.',
      'tool.rocfall.desc':'Προσομοίωση καταπτώσεων βράχων και ανάλυση-διαστασιολόγηση έργων προστασίας από βραχοπτώσεις.',
      'tool.epanet.desc': 'Υδραυλική ανάλυση δικτύων ύδρευσης, υπολογισμός παροχών/πιέσεων, διαστασιολόγηση σωληνώσεων και απαιτούμενων εξαρτημάτων δικτύου.',
      'tool.masw.desc':   'Εξοπλισμός για την εφαρμογη της μεθόδου επιφανειακών κυμάτων και τον επι-τόπου προσδιορισμό του Vs-depth profile.',

      'projects.num':     'Έργο',
      'projects.h2':      'Ενδεικτικές μελέτες',
      'projects.intro':   'Επιλεγμένα παραδείγματα της προσέγγισης — από την αξιολόγηση πεδίου στη μελέτη και στην επιτόπου υλοποίηση.',
      'project.1.title':  'Αντιστήριξη παλαιού πετρόχτιστου τοίχου',
      'project.1.lead':   'Γεωτεχνική και στατική μελέτη αντιστήριξης παλαιού τοίχου με σημάδια μεγάλης παραμόρφωσης, κατά τη διάρκεια εργασιών οδοποιίας έμπροσθεν.',
      'project.1.location':'Πάτρα',
      'project.1.year':   '2025',
      'project.1.client': 'Κατασκευαστική εταιρεία',
      'project.1.scope':  'Γεωτεχνική + Στατική μελέτη',
      'project.1.constraint':'Ευαίσθητο περιβάλλον ανάντη και ταχεία εκπόνηση παράλληλα με την κατασκευαστική εργολαβία.',
      'project.1.body':   'Η μελέτη εκπονήθηκε σε πολύ σύντομο χρονικό διάστημα κατά τη διάρκεια υλοποίησης της εργολαβίας οδοποιίας, ώστε να αποφευχθεί η κατάρρευση του παλαιού τοίχου χωρίς να διακοπεί η κατασκευαστική διαδικασία. Η κατασκευή ξεκίνησε άμεσα μετά την παράδοση της μελέτης.',
      
      'project.2.title':  'Έργo ανάσχεσης βραχοπτώσεων',
      'project.2.lead':   'Γεωτεχνική μελέτη αντιμετώπισης καταπτώσεων βράχων στην Επαρχιακή Οδό αρ. 5 στην περιοχή της Στρώμης.',
      'project.2.location':'Στρώμη, Φωκίδα',
      'project.2.year':   '2017',
      'project.2.client': 'Περιφέρεια Στερεάς Ελλάδος',
      'project.2.scope':  'Γεωτεχνική μελέτη',
      'project.2.constraint':'Σύμπραξη μελετητών (Τοπογραφική, Γεωλογική, Γεωτεχνική, Περιβαλλοντική Μελέτη.',
      'project.2.body':   'Το έργο δημοπρατήθηκε και ολοκληρώθηκε η κατασκευή.',




      'contact.num':      'Επικοινωνία',
      'contact.h2':       'Ας μιλήσουμε για το έργο σας.',
      'contact.intro':    'Για προσφορά, διερευνητική συζήτηση ή τεχνική γνωμοδότηση — επικοινωνήστε απευθείας ή μέσω της φόρμας.',
      'contact.info.email':  'Email',
      'contact.info.phone':  'Τηλέφωνο',
      'contact.info.location':'Έδρα',
      'contact.info.hours':  'Ώρες',
      'contact.location.value':'Φιλοποίμενος 56, Πάτρα, Ελλάδα',
      'contact.hours.value': 'Δευ–Παρ · 09:00–18:00',
      'form.name':        'Όνομα',
      'form.email':       'Email',
      'form.subject':     'Θέμα',
      'form.message':     'Μήνυμα',
      'form.note':        'Θα απαντήσω εντός 1–2 εργάσιμων ημερών. Πληροφορίες που μοιράζεστε παραμένουν εμπιστευτικές.',

      'foot.about':       'Διπλωματούχος Πολιτικός Μηχανικός M.Sc. · Μελέτες & υπηρεσίες.',
      'foot.col1':        'Πλοήγηση',
      'foot.col2':        'Υπηρεσίες',
      'foot.col3':        'Επικοινωνία',
      'foot.copy':        '© 2026 GaioConstruction Design',
      'foot.built':       'Στατική σελίδα · Πάτρα, Ελλάδα',

      'project1.back':    'Επιστροφή στα έργα',
      'project1.eyebrow': 'Έργο · 2025',
      'project1.label.loc':'Τοποθεσία',
      'project1.label.year':'Έτος',
      'project1.label.scope':'Αντικείμενο',
      'project1.label.client':'Πελάτης',
      'project1.label.tools':'Λογισμικό',
      'project1.body.h':  'Πλαίσιο & πρόκληση',
      'project1.body.p1': 'Παλαιός πετρόχτιστος τοίχος αντιστήριξης που παρουσίαζε σημάδια παραμόρφωσης.',
      'project1.body.p2': 'Η μελέτη εκπονήθηκε για κατασκευαστική εταιρεία, παράλληλα με την υλοποίηση της εργολαβίας.',
      'project1.gallery.h':'Φωτογραφικό υλικό & ανάλυση',

      'project2.back':    'Επιστροφή στα έργα',
      'project2.eyebrow': 'Έργο · 2017',
      'project2.label.loc':'Τοποθεσία',
      'project2.label.year':'Έτος',
      'project2.label.scope':'Αντικείμενο',
      'project2.label.client':'Πελάτης',
      'project2.label.tools':'Λογισμικό',
      'project2.body.h':  'Πλαίσιο & πρόκληση',
      'project2.body.p1': 'Έργο ανάσχεσης βραχοπτώσεων.',
      'project2.body.p2': 'Η μελέτη εκπονήθηκε για την Περιφέρεια Στερεάς Ελλάδας Π.Ε. Φωκίδας',
      'project2.gallery.h':'Φωτογραφικό υλικό & ανάλυση',

    },
    en: {
      'nav.home':         'Home',
      'nav.about':        'About',
      'nav.services':     'Services',
      'nav.tools':        'Software',
      'nav.projects':     'Projects',
      'nav.contact':      'Contact',
      'cta.cv':           'Download CV',
      'cta.contact':      'Get in touch',
      'cta.services':     'See services',
      'cta.viewProject':  'View project',
      'cta.send':         'Send message',

      'brand.tagline':    'Geotechnical · Structural · Hydraulic',

      'hero.eyebrow':     'GaioConstruction Design',
      'hero.h1.l1':       'Where soil',
      'hero.h1.accent':   'meets',
      'hero.h1.l2':       'structure.',
      'hero.lead':        'Specialised geotechnical, structural and hydraulic studies for infrastructure projects — with 24+ years of experience in soil–structure interaction.',
      'hero.meta.title':  'Patras, Greece',
      'hero.meta.sub':    'Studies · Consulting · On-site support',

      'cred.years':       'Years of experience',
      'cred.projects':    'Projects delivered',
      'cred.specialty':   'Specialisation',
      'cred.specialty.value': 'Geotechnical',
      'cred.education':   'University of Patras',
      'cred.education.value': 'MSc',

      'about.num':        'About',
      'about.h2':         'Civil engineer, geotechnical specialist.',
      'about.intro':      'Since 2002 I have delivered end-to-end solutions for projects where soil behaviour is critical — from retaining walls and foundations to port works and hydraulic systems.',
      'about.lead':       'I work alongside engineers, geologists and construction firms to turn complex geotechnical problems into safe, buildable and economical designs.',
      'about.body':       'My focus is soil–structure interaction — a discipline that requires combining in-situ investigation, laboratory testing and reliable numerical simulation. Since 2002 I have contributed to projects across all scales, from private residences to public infrastructure.',
      'about.body2':      'I also provide on-site support during construction, when field conditions differ from those of the study or when fast decision-making is needed in difficult soil conditions.',
      'about.bio.0.year': '2002',
      'about.bio.0.text': '<b>Diploma in Civil Engineering</b>, University of Patras.',
      'about.bio.1.year': '2004',
      'about.bio.1.text': '<b>MSc in Civil Engineering Infrastructure Works</b>.',
      'about.bio.2.year': '2004–',
      'about.bio.2.text': '<b>Specialisation in geotechnical works</b> — soil–structure interaction.',
      'about.bio.3.year': 'Today',
      'about.bio.3.text': '<b>Independent studies & services</b> for private clients, engineers and construction firms.',
      'about.portrait.caption.l': 'V. Vlachakis',
      'about.portrait.caption.r': 'PE · MSc',

      'services.num':     'Services',
      'services.h2':      'Six areas of specialised practice.',
      'services.intro':   'From feasibility through to site supervision — services delivered with industry-standard tools and grounded in field investigation.',

      'service.1.title':  'Consulting',
      'service.1.desc':   'Support for infrastructure projects where soil requires expert handling. Risk analysis, evaluation of alternatives and well-founded recommendations for designers, contractors and clients.',
      'service.2.title':  'On-site geotechnical investigation',
      'service.2.desc':   'Exploratory and sampling boreholes, plus in-situ strength, permeability and soil-characterisation tests.',
      'service.3.title':  'Geophysical testing',
      'service.3.desc':   'Surface-wave methods MASW and ReMi for determining the Vs-depth profile and the seismic response of the ground.',
      'service.4.title':  'Underwater inspection',
      'service.4.desc':   'Inspection of port structures, dimensional verification, photo and video documentation, technical reporting. Support for bathymetric surveys with sonar.',
      'service.5.title':  'Engineering studies',
      'service.5.desc':   'Specialised studies for retaining structures, foundations, slope stability and hydraulic networks — using Plaxis, RocFall, EpaNet and similar tools.',
      'service.6.title':  'Project support',
      'service.6.desc':   'On-site support after the study is delivered, condition assessment in difficult soil conditions and guidance through the construction process.',

      'tools.num':        'Software & methods',
      'tools.h2':         'Analysis and field tools.',
      'tools.intro':      'Industry-standard FEM software and in-situ techniques that underpin the studies.',
      'tool.plaxis.desc': 'FEM analysis for geotechnical problems — retaining structures, foundations, deformations.',
      'tool.rocfall.desc':'Rockfall simulation and risk analysis on natural slopes.',
      'tool.epanet.desc': 'Hydraulic modelling of water-distribution networks; flows and pressures.',
      'tool.masw.desc':   'Multichannel Analysis of Surface Waves — Vs-depth profiling.',

      'projects.num':     'Project',
      'projects.h2':      'Recent study.',
      'projects.intro':   'A selected example of the approach — from field assessment through to design and on-site implementation.',
      'project.1.title':  'Stabilisation of an old stone retaining wall',
      'project.1.lead':   'Geotechnical and structural study for a deformed stone wall during adjacent road works.',
      'project.1.location':'Patras',
      'project.1.year':   '2025',
      'project.1.client': 'Construction company',
      'project.1.scope':  'Geotechnical + structural study',
      'project.1.constraint':'Sensitive uphill environment (Patras Municipal Cemetery) and rapid delivery in parallel with the construction contract.',
      'project.1.body':   'The study was delivered on a very short timeline, in parallel with the road-works contract, to prevent collapse of the old wall without interrupting construction. Works started immediately after delivery.',

      'contact.num':      'Contact',
      'contact.h2':       'Let’s talk about your project.',
      'contact.intro':    'For a quote, exploratory call or technical opinion — get in touch directly or via the form.',
      'contact.info.email':  'Email',
      'contact.info.phone':  'Phone',
      'contact.info.location':'Based in',
      'contact.info.hours':  'Hours',
      'contact.location.value':'Patras, Greece',
      'contact.hours.value': 'Mon–Fri · 09:00–18:00',
      'form.name':        'Name',
      'form.email':       'Email',
      'form.subject':     'Subject',
      'form.message':     'Message',
      'form.note':        'I reply within 1–2 working days. Anything you share stays confidential.',

      'foot.about':       'Civil engineer · Soil–structure interaction studies and services across Greece.',
      'foot.col1':        'Navigate',
      'foot.col2':        'Services',
      'foot.col3':        'Contact',
      'foot.copy':        '© 2026 GaioConstruction Design',
      'foot.built':       'Patras, Greece',

      'project1.back':    'Back to projects',
      'project1.eyebrow': 'Project · 2025',
      'project1.label.loc':'Location',
      'project1.label.year':'Year',
      'project1.label.scope':'Scope',
      'project1.label.client':'Client',
      'project1.label.tools':'Software',
      'project1.body.h':  'Context & challenge',
      'project1.body.p1': 'An old dry-stone retaining wall was showing signs of significant deformation. During road works in front of the wall the risk of collapse increased, in a particularly sensitive uphill environment.',
      'project1.body.p2': 'The study was delivered for the construction company on a very short timeline, in parallel with the works contract. Construction started immediately after delivery, without interrupting the road works.',
      'project1.gallery.h':'Site photography & analysis',
    },
  };

  // ---------- Language ----------
  const LANG_KEY = 'gcd:lang';
  function getInitialLang() {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'el' || saved === 'en') return saved;
    return 'el';
  }
  function setLang(lang) {
    if (!I18N[lang]) return;
    document.documentElement.lang = lang;
    localStorage.setItem(LANG_KEY, lang);
    // Swap text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = I18N[lang][key];
      if (value !== undefined) {
        // Allow simple HTML in some keys (e.g. bio rows)
        if (/<b>|<i>|<em>/i.test(value)) el.innerHTML = value;
        else el.textContent = value;
      }
    });
    // Swap attributes (placeholder, aria-label, title, alt)
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr');
      spec.split(',').forEach(pair => {
        const [attr, key] = pair.split(':').map(s => s.trim());
        const value = I18N[lang][key];
        if (attr && value !== undefined) el.setAttribute(attr, value);
      });
    });
    // Toggle pressed state on lang buttons
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang-btn') === lang ? 'true' : 'false');
    });
  }

  function initLang() {
    setLang(getInitialLang());
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang-btn')));
    });
  }

  // ---------- Sticky-nav scroll state ----------
  function initStickyNav() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- Mobile menu ----------
  function initMobileMenu() {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    if (!header || !toggle) return;
    toggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    header.querySelectorAll('.nav-links a').forEach(a => {
      a.addEventListener('click', () => {
        header.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---------- Section spy (highlight current nav item) ----------
  function initScrollSpy() {
    const links = Array.from(document.querySelectorAll('.nav-links a[href^="#"]'));
    if (!links.length) return;
    const map = new Map();
    links.forEach(a => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (target) map.set(target, a);
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('is-active'));
          const a = map.get(entry.target);
          if (a) a.classList.add('is-active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });
    map.forEach((_, target) => io.observe(target));
  }

  // ---------- Tweaks panel ----------
  const TWEAKS_KEY = 'gcd:tweaks';
  const DEFAULT_TWEAKS = {
    accent: '#b8722c',   // terracotta
    density: 'normal',   // compact | normal | airy
    theme: 'light',      // light | dark
  };
  const ACCENT_OPTIONS = [
    { name: 'terracotta', value: '#b8722c', deep: '#8a5118' },
    { name: 'sage',       value: '#5b6b54', deep: '#3f4b3a' },
    { name: 'ocean',      value: '#1a4d8c', deep: '#103660' },
    { name: 'rust',       value: '#9c3b1f', deep: '#6e2613' },
  ];

  function loadTweaks() {
    try {
      const saved = JSON.parse(localStorage.getItem(TWEAKS_KEY) || '{}');
      return Object.assign({}, DEFAULT_TWEAKS, saved);
    } catch (e) { return Object.assign({}, DEFAULT_TWEAKS); }
  }
  function saveTweaks(t) { localStorage.setItem(TWEAKS_KEY, JSON.stringify(t)); }

  function applyTweaks(t) {
    const root = document.documentElement;
    const opt = ACCENT_OPTIONS.find(o => o.value === t.accent) || ACCENT_OPTIONS[0];
    root.style.setProperty('--accent', opt.value);
    root.style.setProperty('--accent-2', opt.deep);
    root.setAttribute('data-density', t.density);
    root.setAttribute('data-theme', t.theme);
  }

  function buildTweaksPanel() {
    const tweaks = loadTweaks();
    applyTweaks(tweaks);

    const panel = document.createElement('aside');
    panel.className = 'tweaks';
    panel.setAttribute('aria-label', 'Tweaks panel');
    panel.innerHTML = `
      <div class="tweaks-head">
        <div class="tweaks-title">Tweaks</div>
        <button class="tweaks-close" aria-label="Close">×</button>
      </div>
      <div class="tweak-row">
        <span class="tweak-label">Accent</span>
        <div class="tweak-swatches" role="radiogroup" aria-label="Accent color">
          ${ACCENT_OPTIONS.map(o => `
            <button class="tweak-swatch" style="background:${o.value}"
              data-accent="${o.value}" data-accent-deep="${o.deep}"
              aria-label="${o.name}"
              aria-pressed="${o.value === tweaks.accent}"></button>
          `).join('')}
        </div>
      </div>
      <div class="tweak-row">
        <span class="tweak-label">Density</span>
        <div class="tweak-seg" role="radiogroup" aria-label="Density">
          ${['compact','normal','airy'].map(d => `
            <button data-density="${d}" aria-pressed="${d === tweaks.density}">${d}</button>
          `).join('')}
        </div>
      </div>
      <div class="tweak-row">
        <span class="tweak-label">Theme</span>
        <div class="tweak-seg" role="radiogroup" aria-label="Theme">
          ${['light','dark'].map(d => `
            <button data-theme="${d}" aria-pressed="${d === tweaks.theme}">${d}</button>
          `).join('')}
        </div>
      </div>
    `;
    document.body.appendChild(panel);

    // Wire interactions
    panel.querySelectorAll('[data-accent]').forEach(btn => {
      btn.addEventListener('click', () => {
        tweaks.accent = btn.getAttribute('data-accent');
        applyTweaks(tweaks); saveTweaks(tweaks);
        panel.querySelectorAll('[data-accent]').forEach(b =>
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      });
    });
    panel.querySelectorAll('[data-density]').forEach(btn => {
      btn.addEventListener('click', () => {
        tweaks.density = btn.getAttribute('data-density');
        applyTweaks(tweaks); saveTweaks(tweaks);
        panel.querySelectorAll('[data-density]').forEach(b =>
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      });
    });
    panel.querySelectorAll('[data-theme]').forEach(btn => {
      btn.addEventListener('click', () => {
        tweaks.theme = btn.getAttribute('data-theme');
        applyTweaks(tweaks); saveTweaks(tweaks);
        panel.querySelectorAll('[data-theme]').forEach(b =>
          b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'));
      });
    });
    panel.querySelector('.tweaks-close').addEventListener('click', () => {
      panel.classList.remove('is-open');
      try { window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*'); } catch (e) {}
    });

    // Host protocol
    window.addEventListener('message', (e) => {
      const data = e.data;
      if (!data || typeof data !== 'object') return;
      if (data.type === '__activate_edit_mode')   panel.classList.add('is-open');
      if (data.type === '__deactivate_edit_mode') panel.classList.remove('is-open');
    });
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
  }

  // ---------- Form (no backend; shows confirmation) ----------
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const lang = document.documentElement.lang || 'el';
      const ok = (lang === 'el')
        ? 'Ευχαριστούμε — το μήνυμά σας ελήφθη. Θα σας απαντήσω σύντομα.'
        : 'Thank you — your message was received. I will reply shortly.';
      const slot = form.querySelector('.form-feedback');
      if (slot) {
        slot.textContent = ok;
        slot.hidden = false;
      }
      form.reset();
    });
  }

  // ---------- Boot ----------
  document.addEventListener('DOMContentLoaded', () => {
    initLang();
    initStickyNav();
    initMobileMenu();
    initScrollSpy();
    initContactForm();
    buildTweaksPanel();
  });
})();
