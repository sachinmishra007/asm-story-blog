import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class DataService {

    public mainInfoArray = [{
        id: 0,
        blogImage: '../assets//marriage1.png',
        isPopular: false,
        date: '17 जुलाई 2020',
        time: '51 मिनट',
        description: `
        प्रसन्ना का जीवन #संघर्ष भरा है उसके बाबू जी कट्टर विचारों वाले व्यक्ति हैं वे उसे सिर्फ इसलिए बम्बई जाने नहीं देना चाहते कि वह वहाँ जा कर सबको भूल जाएगा और कभी वापस लौट कर नहीं आएगा। उसने शादी से भी इनकार कर  दिया है उसे उम्मीद है कि उसके सपनों की रानी उसे बम्बई जैसे सपनों के शहर में मिलेगी । `,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        src: '../assets/jivansathi.png',
        summary: 'जीवनसाथी हम दिया और बाती हम',
        tags: ["प्रेम", "संस्मरण", "स्त्री - विमर्श"],
        rating: {
            colorStar: 4,
            notColored: 1,
            mainRaiting: 4.5
        },
        parts: '9 भाग',
        partDescription: [
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-1',
                published: '10 मई 2020',
                time: '6 मिनट',
                rating: 4.7
            },
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-2',
                published: '14 मई 2020',
                time: '6 मिनट',
                rating: 4.5
            },
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-3',
                published: '14 मई 2020',
                time: '5 मिनट',
                rating: 4.2
            },
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-4',
                published: '14 मई 2020',
                time: '6 मिनट',
                rating: 4.7
            },
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-5',
                published: '08 जून 2020',
                time: '5 मिनट',
                rating: 5
            },
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-6',
                published: '16 जून 2020',
                time: '6 मिनट',
                rating: 5
            },
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-7',
                published: '21 जून 2020',
                time: '4 मिनट',
                rating: 4.5
            },
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-8',
                published: '18 जुलाई 2020',
                time: '6 मिनट',
                rating: 4.3
            },
            {
                name: 'जीवन साथी हम दिया और बाती हम भाग-9',
                published: '18 जुलाई 2020',
                time: '6 मिनट',
                rating: 5
            }
        ]
    }, {
        id: 2,
        blogImage: '../assets//lovestory.png',
        isPopular: false,
        date: '17 जुलाई 2020',
        time: '8 मिनट',
        summary: 'मेरे सपनों की रानी कब आएगी तू',
        description: `
      प्रसन्ना का जीवन #संघर्ष भरा है उसके बाबू जी कट्टर विचारों वाले व्यक्ति हैं वे उसे सिर्फ इसलिए बम्बई जाने नहीं देना चाहते कि वह वहाँ जा कर सबको भूल जाएगा और कभी वापस लौट कर नहीं आएगा। उसने शादी से भी इनकार कर  दिया है उसे उम्मीद है कि उसके सपनों की रानी उसे बम्बई जैसे सपनों के शहर में मिलेगी । `,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        src: '../assets/jivansathi.png',
        tags: ["प्रेम", "मनोरंजन", "वेबसीरीज", "#संघर्ष"],
        rating: {
            colorStar: 4,
            notColored: 1,
            mainRaiting: 4.3
        },
        parts: '2 भाग',
        partDescription: [
            {
                name: 'मेरे सपनों की रानी कब आएगी तू ? भाग-1',
                published: '22 जुलाई 2020',
                time: '3 मिनट',
                rating: 4
            },
            {
                name: 'मेरे सपनों की रानी कब आएगी तू ? भाग-2',
                published: '23 जुलाई 2020',
                time: '5 मिनट',
                rating: 4.6
            }
        ]
    },
    {
        id: 3,
        blogImage: '../assets//haunted.png',
        isPopular: false,
        date: '17 जुलाई 2020',
        time: '49 मिनट',
        tags: ['हॉन्टेड'],
        rating: {
            colorStar: 4,
            notColored: 1,
            mainRaiting: 4.2
        },
        parts: '9 भाग',
        summary: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल',
        description: `
      मेरे सभी प्रिय पाठकों एवं  निर्णायकगण को मेरा नमस्कार, मैं अंजली सचिन मिश्रा , प्रतिलिपि पर चल रहे  श?श ?श? कोई है? के हॉन्टेड कहानी सम्मेलन की प्रतियोगिता में भाग ले रही हूँ ,आशा है कि आप सब मेरी यह ... `,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        partDescription: [
            {
                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-१',
                published: '15 मई 2020',
                time: '5 मिनट',
                rating: 5
            },
            {

                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-2',
                published: '15 मई 2020',
                time: '5 मिनट',
                rating: 4
            },
            {

                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-3',
                published: '15 मई 2020',
                time: '5 मिनट',
                rating: 4.5
            },
            {

                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-4',
                published: '15 मई 2020',
                time: '10 मिनट',
                rating: 4.2
            },
            {

                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-5',
                published: '15 मई 2020',
                time: '10 मिनट',
                rating: 4.2
            },
            {

                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-6',
                published: '26 मई 2020',
                time: '3 मिनट',
                rating: 0
            },
            {

                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-7',
                published: '26 जून 2020',    
                time: '3 मिनट',
                rating: 1
            },
            {

                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-7',
                published: '21 जून 2020',    
                time: '6 मिनट',
                rating: 4.5
            },
            {

                name: 'रहस्यमयी हॉन्टेड कैमरा -एक आत्मा का शैतानी खेल। भाग-7',
                published: '30 जून 2020',    
                time: '5 मिनट',
                rating: 4.5
            }
        ]
    },
    {
        id: 4,
        blogImage: '../assets//marriage.png',
        isPopular: false,
        date: '17 जुलाई 2020',
        time: '3 मिनट',
        tags: ['प्रेम', 'स्त्री - विमर्श'],
        summary: 'अबकी सावन प्रियतम संग',
        rating: {
            colorStar: 4,
            notColored: 1,
            mainRaiting: 4.2
        },
        parts: '1 भाग',
        description: `
      अबकी सावन प्रियतम संग अबकी सावन प्रियतम संग, हा प्रियतम संग, इसबार हुआ है, मधुर मिलन, अबकी सावन प्रियतम संग। अबकी सावन प्रियतम संग, हा प्रियतम संग, अबकी बरस मैं भीगू   तुम संग, अबकी सावन प्रियतम संग। ...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        partDescription:[]
    },
    {
        id: 5,
        blogImage: '../assets//heroine.png',
        isPopular: false,
        date: '17 मई 2020',
        time: '3 मिनट',
        tags: ['हॉरर', 'लघुकथा'],
        summary: 'मैं हीरोईन हूँ!',
        rating: {
            colorStar: 4,
            notColored: 1,
            mainRaiting: 4
        },
        parts: '1 भाग',
        description: `
      यह कहानी है अप्पू की उर्फ अपर्णा सेन की।अप्पू अपने परिवार के साथ बंगाल प्रांत के दार्जीलिंग  की रहने वाली हैं, इनके पिता जी चाय के बागानों में काम करते हैं। अप्पू अपने माता-पिता की अकेली संतान ...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        partDescription:[]
    },
    {
        id: 6,
        blogImage: '../assets//chai.png',
        isPopular: false,
        date: '04 जुलाई 2020',
        time: '1 मिनट',
        tags: ['जीवन', 'छोटी कवितायें'],
        summary: 'मैं चायवाला,और ये मेरी टपरी!',
        description: `मैं चायवाला , और  ये मेरी टपरी! मैं चाय वाला हूँ,  मेरा रोज़ का धंधा यहाँ फिक्स है, अरे !ओ ग़ालिब ,ये चाय नहीं, मेरा इश्क है। लोग चुस्कियां ले मस्त हैं मैं पिलाकर मस्त हूँ। अरे !ओ ग़ालिब, ये चाय नहीं, ...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        rating: {
            colorStar: 3,
            notColored: 2,
            mainRaiting: 3.4
        },
        parts: '1 भाग',
        partDescription:[]
    },
    {
        id: 7,
        blogImage: '../assets//papa.png',
        isPopular: true,
        date: '21 जून 2020',
        time: '1 मिनट',
        tags: ['जीवन', 'प्रेम'],
        summary: 'पापा 😍😘😊',
        description: `
      पापा रोटी, कपड़ा, मकान हैं पापा, इस नन्ही सी परिंदे के बड़े से आसमान हैं पापा, घर में फैली रोशनी के रोशनदान हैं पापा, मां के माथे की बिंदी और सुहाग हैं पापा, तेज़ धूप में मेहनत करने वाले इंसान हैं ...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        rating: {
            colorStar: 5,
            notColored: 0,
            mainRaiting: 5
        },
        parts: '1 भाग',
        partDescription:[]
    },
    {
        id: 8,
        blogImage: '../assets//cover.png',
        isPopular: true,
        date: '30 जून 2020',
        time: '7 मिनट',
        tags: ['लघुकथा', 'प्रेम'],
        summary: 'मंटू',
        description: `मंटू सुनने में तो यह नाम किसी मनुष्य का लगता है किसी बालक का लेकिन यहाँ यह नाम एक तोते का है जी हाँ बिल्कुल सही समझा आपने, यह मंटू कोई और नहीं बल्कि एक तोता है। आज मंटू बहुत ही उदास था...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        rating: {
            colorStar: 5,
            notColored: 0,
            mainRaiting: 5
        },
        parts: '1 भाग',
        partDescription:[]
    },
    {
        id: 9,
        blogImage: '../assets//sambhar.png',
        isPopular: false,
        date: '08 जून 2020',
        time: '1 मिनट',
        tags: ['स्वास्थ्य', 'ज्ञानवर्धक'],
        summary: `सांभर बनाने की विधि चटोरों की रसोईं- अंजली मिश्रा`,
        description: `
      नमस्कार मेरे पाठकों मैं आपके लिए लेकर आयी हूँ सांभर बनाने की बहुत ही बेहतर विधि उम्मीद है मेरे इस वीडियो से आप बड़ी ही सरलता के साथ दक्षिणी भारत का प्रसिद्ध सांभर बनाना सीख जाएंगे और अगर आपको पहले ...`,
        authorImage: '../assets//profile.png',
        authorName: 'अंजली मिश्रा',
        rating: {
            colorStar: 5,
            notColored: 0,
            mainRaiting: 5
        },
        parts: '1 भाग',
        partDescription:[]
    },];


}