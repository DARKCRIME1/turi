const QueenSew = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const Config = require('../config');

const Language = require('../language');

if (Config.WORKTYPE == 'private') {

    QueenSew.applyCMD({pattern: 'tagadmin', fromMe: true }, (async (message, match) => {

        let grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(async (uye) => {

            if (uye.isAdmin) {

                mesaj += 'ā āā¢ š @' + uye.id.split('@')[0] + '\nā āāā¢ š wa.me/'+ uye.id.split('@')[0] + '  š\nā\n';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        });

        await message.client.sendMessage(message.jid,'āāāāāāāāāāāāāāāāāāāāāāāāāā\nā\nā š    *š Group Admins š*    š\nā\nā\n' + mesaj + 'āāāāāāāāāāāāāāāāāāāāāāāāāā', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }));

}

else if (Config.WORKTYPE == 'public') {

    QueenSew.applyCMD({pattern: 'tagadmin', fromMe: false }, (async (message, match) => {

        let grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(async (uye) => {

            if (uye.isAdmin) {

                mesaj += 'ā āā¢ š @' + uye.id.split('@')[0] + '\nā āāā¢ š wa.me/' + uye.id.split('@')[0] + '  š\nā\n';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        });

        await message.client.sendMessage(message.jid,'āāāāāāāāāāāāāāāāāāāāāāāāāā\nā\nā š    *š Group Admins š*    š\nā\nā\n' + mesaj + 'āāāāāāāāāāāāāāāāāāāāāāāāāā', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }));

    QueenSew.applyCMD({pattern: 'tagadmin', fromMe: true }, (async (message, match) => {

        let grup = await message.client.groupMetadata(message.jid);

        var jids = [];

        mesaj = '';

        grup['participants'].map(async (uye) => {

            if (uye.isAdmin) {

                mesaj += 'ā āā¢š @' + uye.id.split('@')[0] + '\nā āāā¢ š wa.me/' + uye.id.split('@')[0] + '  š\nā\n';

                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));

            }

        });

        await message.client.sendMessage(message.jid,'āāāāāāāāāāāāāāāāāāāāāāāāāā\nā\nā š    *š Group Admins š*    š\nā\nā\n' + mesaj + 'āāāāāāāāāāāāāāāāāāāāāāāāāā', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})

    }));

}
