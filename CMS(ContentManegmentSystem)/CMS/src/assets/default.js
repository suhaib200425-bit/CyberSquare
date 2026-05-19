export const MenuAndPages = {
    "menu": {
        "title": "Default Menu",
        "slug": "/defaultMenu"
    },
    "category": {
        "title": "News",
        "slug": "news",
        "parent": null,
        "description": "",
    },
    "post": {
        "title": "The Rise of Edge Computing",
        "banner": "https://i.pinimg.com/736x/96/15/fe/9615fe3ed93cf4680847d503fa4e67fd.jpg",
        "status": "Published",
        "views": 0,
        "excerpt": "Cloud computing-nu purame ippo Edge computing rangathekku varunnu. Ithu data processing vegam koottum.",
        "content": "\u003Ch1\u003ECloud-nu Appuram: Edge Computing\u003C/h1\u003E\n\u003Cp\u003EData processing kooduthal vegathilaakkan 'Edge Computing' sahayikkunnu. Ithu data source-inte aduthu thanne processing nadathunnu.\u003C/p\u003E\n\u003Ch2\u003EReal-time Speed\u003C/h2\u003E\n\u003Cp\u003ESelf-driving car-ukalilum IoT devices-ilum kshana-neram kondu theerumanangal edukkan Edge computing mukhya panku vahikkunnu.\u003C/p\u003E\n\u003Ch2\u003EBandwidth Saving\u003C/h2\u003E\n\u003Cp\u003EMuzhuvan data-yum central cloud-lekku ayakkatha-thinaal internet bandwidth laabhikkan ithu sahayikkum.\u003C/p\u003E\n\u003Cp\u003E&nbsp;\u003C/p\u003E\n\u003Cp\u003E\u003Cimg style=\"width: min(624px, 100%); aspect-ratio: 624 / 231;\" src=\"https://ucarecdn.com/13b07e0d-cc59-43d0-82b3-0b7ae357ce1e/-/preview/\" sizes=\"(min-width: 624px) 624px, 100vw\" srcset=\"https://ucarecdn.com/13b07e0d-cc59-43d0-82b3-0b7ae357ce1e/-/resize/100x/ 100w,https://ucarecdn.com/13b07e0d-cc59-43d0-82b3-0b7ae357ce1e/-/resize/200x/ 200w,https://ucarecdn.com/13b07e0d-cc59-43d0-82b3-0b7ae357ce1e/-/resize/300x/ 300w,https://ucarecdn.com/13b07e0d-cc59-43d0-82b3-0b7ae357ce1e/-/resize/500x/ 500w,https://ucarecdn.com/13b07e0d-cc59-43d0-82b3-0b7ae357ce1e/-/preview/ 624w\"\u003E\u003C/p\u003E\n\u003Ch1\u003ECloud-nu Appuram: Edge Computing\u003C/h1\u003E\n\u003Cp\u003EData processing kooduthal vegathilaakkan 'Edge Computing' sahayikkunnu. Ithu data source-inte aduthu thanne processing nadathunnu.\u003C/p\u003E\n\u003Ch2\u003EReal-time Speed\u003C/h2\u003E\n\u003Cp\u003ESelf-driving car-ukalilum IoT devices-ilum kshana-neram kondu theerumanangal edukkan Edge computing mukhya panku vahikkunnu.\u003C/p\u003E\n\u003Ch2\u003EBandwidth Saving\u003C/h2\u003E\n\u003Cp\u003EMuzhuvan data-yum central cloud-lekku ayakkatha-thinaal internet bandwidth laabhikkan ithu sahayikkum.\u003Cimg style=\"width: min(624px, 100%); aspect-ratio: 624 / 231;\" src=\"https://ucarecdn.com/203c4c29-bf17-4d09-9c0f-fb65849cb7c0/-/preview/\" sizes=\"(min-width: 624px) 624px, 100vw\" srcset=\"https://ucarecdn.com/203c4c29-bf17-4d09-9c0f-fb65849cb7c0/-/resize/100x/ 100w,https://ucarecdn.com/203c4c29-bf17-4d09-9c0f-fb65849cb7c0/-/resize/200x/ 200w,https://ucarecdn.com/203c4c29-bf17-4d09-9c0f-fb65849cb7c0/-/resize/300x/ 300w,https://ucarecdn.com/203c4c29-bf17-4d09-9c0f-fb65849cb7c0/-/resize/500x/ 500w,https://ucarecdn.com/203c4c29-bf17-4d09-9c0f-fb65849cb7c0/-/preview/ 624w\"\u003E\u003C/p\u003E"
    },
    "page": {
        
        "title": "Default Page",
        "slug": "/defaultPage",
        "status": "Published",
        "sections": [
            {
                "name": "HeroSection",
                "template": "function HeroSection({ title = { value: 'Hero Section' }, titleColor = { value: 'white' }, titleSize = { value: '50px' }, padding = { value: '' }, Mobilepadding = { value: '' }, subtitle = { value: 'We build amazing experiences' }, image = { value: 'https://i.pinimg.com/736x/59/68/84/59688476322cfd9946898b7865582143.jpg' }, imagePosition = { value: 'center' }, height = { value: '300px' }, subtitleSize = { value: '17px' }, subtitleWidth = { value: '' }, subtitleMargin = { value: '10px' }, subtitleColor = { value: 'gray' }, borderRadius = { value: '0px' }, rowAline = { value: 'center' }, colAline = { value: 'center' } }) { const isMobile = window.innerWidth \u003C 768; const [searchParams] = useSearchParams(); const category = searchParams.get('category'); return ( \u003Cdiv className='w-full flex flex-col p-[50px] bg-no-repeat bg-cover' style={{ padding: window.innerWidth \u003C 768 ? Mobilepadding.value || '0px 10px' : padding.value || '0px 100px', alignItems: rowAline.value, justifyContent: colAline.value, borderRadius: borderRadius.value, backgroundImage: `url(${image.value})`, backgroundPosition: imagePosition.value, height: height.value }} \u003E \u003C\u003E \u003Ch1 className='leading-[0.8] font-bold' style={{ fontSize: titleSize.value, color: titleColor.value || 'white' }} \u003E {category ? category : title.value} \u003C/h1\u003E {!category && ( \u003Cp className='text-[20px]' style={{ color: subtitleColor.value, margin: subtitleMargin.value, width: subtitleWidth.value, textAlign: rowAline.value, fontSize: subtitleSize.value }} \u003E {subtitle.value} \u003C/p\u003E )} \u003C/\u003E \u003C/div\u003E ); }",
                "props": {
                    "title": {
                        "label": "Title",
                        "type": "text",
                        "value": "Home Section"
                    },
                    "titleColor": {
                        "label": "Title Color",
                        "type": "color",
                        "value": "white"
                    },
                    "titleSize": {
                        "label": "Title Size",
                        "type": "text",
                        "value": "45px"
                    },
                    "padding": {
                        "label": "Padding",
                        "type": "text",
                        "value": ""
                    },
                    "Mobilepadding": {
                        "label": "Mobile Padding",
                        "type": "text",
                        "value": ""
                    },
                    "subtitle": {
                        "label": "Subtitle",
                        "type": "text",
                        "value": ""
                    },
                    "image": {
                        "label": "Background Image",
                        "type": "image",
                        "value": "https://i.pinimg.com/736x/4b/30/db/4b30dbe65f8ea7ff9f1318f6f89cb676.jpg"
                    },
                    "imagePosition": {
                        "label": "Image Position",
                        "type": "text",
                        "value": "center"
                    },
                    "height": {
                        "label": "Height",
                        "type": "text",
                        "value": "90vh"
                    },
                    "subtitleSize": {
                        "label": "Subtitle Size",
                        "type": "text",
                        "value": "17px"
                    },
                    "subtitleWidth": {
                        "label": "Subtitle Width",
                        "type": "text",
                        "value": "80%"
                    },
                    "subtitleMargin": {
                        "label": "Subtitle Margin",
                        "type": "text",
                        "value": "10px 0px"
                    },
                    "subtitleColor": {
                        "label": "Subtitle Color",
                        "type": "color",
                        "value": "white"
                    },
                    "borderRadius": {
                        "label": "Border Radius",
                        "type": "text",
                        "value": "0px"
                    },
                    "rowAline": {
                        "label": "Row Align",
                        "type": "text",
                        "value": ""
                    },
                    "colAline": {
                        "label": "Column Align",
                        "type": "text",
                        "value": "center"
                    }
                }
            }
        ]
    }
}
