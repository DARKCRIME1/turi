const Trex = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*type some word after command ð"

if (Config.WORKTYPE == 'private') {
   
   
   Trex.applyCMD({ pattern: 'rlpack', fromMe: true, dontAddCommandList: true }, (async (message, match) => {

        var ttinullimage = await axios.get(`https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  `âââââââââââââââââââââââ
ââ ð*REX LOGO PACK 1*ð â
â ââââââââââââââââââââââ
â
â ââ¢ ðCmd: *.phub*
â âââ¢ ð Dec: *Send pornhub logo*
â ââ¢ ð Ex: *.phub T-Rex/Hiruwa*
â
â ââ¢ ð Cmd: *.stone*
â âââ¢ ð Dec: *Send stone like logo*
â ââ¢ ðEx: *.stone T-REX/Hiruwa*
â
â ââ¢ ðCmd: *.glitch*
â âââ¢ ð Dec: *Send glitch logo*
â ââ¢ ð Ex: *.glitch T-Rex/Hiruwa*
â
â ââ¢ ðCmd: *.space*
â âââ¢ ð Dec: *Send space logo*
â ââ¢ ðEx: *.space T-Rex/Hiruwa*
â
â ââ¢ ðCmd: *.blood*
â âââ¢ ð Dec: *Send blood hor logo*
â ââ¢ ðEx: *.blood T-REX*
â
â ââ¢ ðCmd: *.blackpink*
â âââ¢ ð Dec: *Send bpink logo*
â ââ¢ ðEx: *.blackpink T-REX*
â
â ââ¢ ðCmd: *.wall*
â âââ¢ ð Dec: *Send wall art logo*
â ââ¢ ðEx: *.wall T-Rex*
â
â ââ¢ ðCmd: *.coding*
â âââ¢ð Dec: *Send coding logo*
â ââ¢ ð Ex: *.coding T-REX*
â
â ââ¢ ðCmd: .*.sand1*
â âââ¢ ð  Dec: *Send sand writting*
â ââ¢ ð Ex: *.sand1 T-REX*
â
â ââ¢ ðCmd: *.sand2*
â âââ¢ ð Dec: *Send sand writting*
â ââ¢ ðEx: *.sand2 T-REX
â
â ââ¢ ðCmd: *.sand3*
â âââ¢ ð Dec: *Send sand writting*
â ââ¢ ðEx: *.sand3 T-REX
â
â ââ¢ ðCmd: *.beach*
â âââ¢ ð Dec: *Send beach logo*
â ââ¢ ðEx: *.beach T-REX
â
â ââ¢ ðCmd: *.gradient*
â âââ¢ ð  Dec: *Send logo*
â ââ¢ ð Ex: *.gradient T-REX*
â
â ââ¢ ðCmd: *.luxury*
â âââ¢ ð  Dec: *Send luxury logo*
â ââ¢ ð Ex: *.luxury T-REX*
â
â ââ¢ ðCmd: *.sky*
â âââ¢ ð  Dec: *Send sky logo*
â ââ¢ ð Ex: *.sky T-REX*
â
â ââ¢ ðCmd: *.winter*
â âââ¢ ð  Dec: *Send winter logo*
â ââ¢ ð Ex: *.winter T-REX
â
â ââ¢ ðCmd: *.christmas*
â âââ¢ ð  Dec: *Send xmas logo*
â ââ¢ ð Ex: *.christmas T-REX*
â
â ââ¢ ðCmd: *.neon*
â âââ¢ ð  Dec: *Send neon logo*
â ââ¢ ð Ex: *.neon T-REX*
â
â ââ¢ ðCmd: *.king*
â âââ¢ ð  Dec: *Send king logo*
â ââ¢ ð Ex: *.king T-REX*
â
â ââ¢ ðCmd: *.glue*
â âââ¢ ð  Dec: *Send Glue logo*
â ââ¢ ð Ex: *.glue T-REX*
â
â      ââð T-REX BOT ðââ
â        â ENJOY WITH US â
âââââââââââââââââââââââ`,quoted: message.data})

    }));

   Trex.applyCMD({pattern: 'gamma ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://api.lolhuman.xyz/api/meme8?apikey=d3be4b65ca9dab633c773d66&text1=${topText}&text2=${bottomText}`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' â°ðð±  T Rex BOT  ð±ðâ±  ' ,quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'stone ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/stone-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' â°ðð±  T Rex BOT  ð±ðâ±  ' ,quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'glitch ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/glitch-text?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' â°ðð±  T Rex BOT  ð±ðâ±  ' ,quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'space ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/space-3d?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' â°ðð±  T Rex BOT  ð±ðâ±  ' ,quoted: message.data})
   
   }));
   
   Trex.applyCMD({pattern: 'phub ?(.*)', fromMe: true, dontAdCommandList: true}, (async (message, match) => {
      if (match[1] === '') return await message.client.sendMessage(message.jid,need);
      var topText, bottomText;
      if (match[1].includes('/')) {
         var split = match[1].split('/');
         bottomText = split[1];
         topText = split[0];
      }
      
      var sewimage = await axios.get(`https://pencarikode.xyz/api/textpro/phub?text=${topText}&text2=${bottomText}&apikey=pais`, { responseType: 'arraybuffer' })
      
      await message.client.sendMessage(message.jid,Buffer.from(sewimage.data), MessageType.image, {mimetype: Mimetype.jpg, caption: ' â°ðð±  T Rex BOT  ð±ðâ±  ' ,quoted: message.data})
   
   }));
   
   
     Trex.applyCMD({ pattern: 'blood ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/horror?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'blackpink ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/blackpink?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'coding ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/matrix?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'wall ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/graffiti?text=${encodeURIComponent(match[1])}&text2=Rex&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'sand1 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-writing?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'beach ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/beach?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'gradient ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/gradient?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'luxury ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/luxury?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'sky ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sky?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'winter ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/winter?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
   
   Trex.applyCMD({ pattern: 'christmas ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/christmas?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})
    }));
      
     Trex.applyCMD({ pattern: 'neon ?(.*)', fromMe: false,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/neon-light?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'king ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/metal-dark?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
      Trex.applyCMD({ pattern: 'sand2 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/summery-sand?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
      
      Trex.applyCMD({ pattern: 'sand3 ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/sand-engraved?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
      
      
      Trex.applyCMD({ pattern: 'glue ?(.*)', fromMe: true,dontAdCommandList: true }, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(need);

        var rex = await axios.
        get(`https://pencarikode.xyz/api/textpro/glue-text?text=${encodeURIComponent(match[1])}&apikey=pais`, { responseType: 'arraybuffer' })
        await message.sendMessage(Buffer.from(rex.data), MessageType.image, { mimetype: Mimetype.jpg, caption:  'â°ðð±  T Rex BOT  ð±ðâ± ' ,quoted: message.data})

    }));
      
      
      
      
   
}
