
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: FR (French; français)
 */
    $.extend($.validator.messages, {
        required: 'Ce champ est obligatoire.',
        remote: 'Veuillez corriger ce champ.',
        email: 'Veuillez fournir une adresse \xE9lectronique valide.',
        url: 'Veuillez fournir une adresse URL valide.',
        date: 'Veuillez fournir une date valide.',
        dateISO: 'Veuillez fournir une date valide (ISO).',
        number: 'Veuillez fournir un num\xE9ro valide.',
        digits: 'Veuillez fournir seulement des chiffres.',
        creditcard: 'Veuillez fournir un num\xE9ro de carte de cr\xE9dit valide.',
        equalTo: 'Veuillez fournir encore la m\xEAme valeur.',
        extension: 'Veuillez fournir une valeur avec une extension valide.',
        maxlength: $.validator.format('Veuillez fournir au plus {0} caract\xE8res.'),
        minlength: $.validator.format('Veuillez fournir au moins {0} caract\xE8res.'),
        rangelength: $.validator.format('Veuillez fournir une valeur qui contient entre {0} et {1} caract\xE8res.'),
        range: $.validator.format('Veuillez fournir une valeur entre {0} et {1}.'),
        max: $.validator.format('Veuillez fournir une valeur inf\xE9rieure ou \xE9gale \xE0 {0}.'),
        min: $.validator.format('Veuillez fournir une valeur sup\xE9rieure ou \xE9gale \xE0 {0}.'),
        maxWords: $.validator.format('Veuillez fournir au plus {0} mots.'),
        minWords: $.validator.format('Veuillez fournir au moins {0} mots.'),
        rangeWords: $.validator.format('Veuillez fournir entre {0} et {1} mots.'),
        letterswithbasicpunc: 'Veuillez fournir seulement des lettres et des signes de ponctuation.',
        alphanumeric: 'Veuillez fournir seulement des lettres, nombres, espaces et soulignages.',
        lettersonly: 'Veuillez fournir seulement des lettres.',
        nowhitespace: 'Veuillez ne pas inscrire d\'espaces blancs.',
        ziprange: 'Veuillez fournir un code postal entre 902xx-xxxx et 905-xx-xxxx.',
        integer: 'Veuillez fournir un nombre non d\xE9cimal qui est positif ou n\xE9gatif.',
        vinUS: 'Veuillez fournir un num\xE9ro d\'identification du v\xE9hicule (VIN).',
        dateITA: 'Veuillez fournir une date valide.',
        time: 'Veuillez fournir une heure valide entre 00:00 et 23:59.',
        phoneUS: 'Veuillez fournir un num\xE9ro de t\xE9l\xE9phone valide.',
        phoneUK: 'Veuillez fournir un num\xE9ro de t\xE9l\xE9phone valide.',
        mobileUK: 'Veuillez fournir un num\xE9ro de t\xE9l\xE9phone mobile valide.',
        strippedminlength: $.validator.format('Veuillez fournir au moins {0} caract\xE8res.'),
        email2: 'Veuillez fournir une adresse \xE9lectronique valide.',
        url2: 'Veuillez fournir une adresse URL valide.',
        creditcardtypes: 'Veuillez fournir un num\xE9ro de carte de cr\xE9dit valide.',
        ipv4: 'Veuillez fournir une adresse IP v4 valide.',
        ipv6: 'Veuillez fournir une adresse IP v6 valide.',
        require_from_group: 'Veuillez fournir au moins {0} de ces champs.',
        nifES: 'Veuillez fournir un num\xE9ro NIF valide.',
        nieES: 'Veuillez fournir un num\xE9ro NIE valide.',
        cifES: 'Veuillez fournir un num\xE9ro CIF valide.',
        postalCodeCA: 'Veuillez fournir un code postal valide.'
    });
}));