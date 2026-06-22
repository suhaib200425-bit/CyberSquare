// export const BASEURL = 'http://localhost:5000'
export const BASEURL ='http://10.18.148.119:5000'
// export const BASEURL ='https://thee-slightly-dowry.ngrok-free.dev'
import authone from '../assets/auth1.jpg' 
import authtwo from '../assets/auth2.jpg' 
export const ALLAUTHPAGES = [
        {
            "pageImage": authone
            
        }, {
            "pageImage": authtwo
        }
    ]

export const PAGEAPI = `${BASEURL}/api/page`
export const USERAPI = `${BASEURL}/api/user`
export const CATEGORYAPI = `${BASEURL}/api/category`
export const POSTAPI = `${BASEURL}/api/post`
export const MENUAPI = `${BASEURL}/api/menu`
export const TEMPLATEAPI = `${BASEURL}/api/template`
export const NAVBARTEMPLATEAPI = `${BASEURL}/api/navbar/template`
export const REACTTEPLATEAPI =`${BASEURL}/api/react/template`
export const AUTHTEMPLATEAPI =`${BASEURL}/api/auth/template`
export const DASHBOARDAPI=`${BASEURL}/api/dashboard`
export const FOOTERTEMPLATEAPI =`${BASEURL}/api/footer/template`
export const THEMETEMPLATEAPI =`${BASEURL}/api/theme/template`


export const ProfileImage = 'https://i.pinimg.com/originals/6e/59/95/6e599501252c23bcf02658617b29c894.jpg?nii=t'

export const StaticPage = {
  "title": "Home Page",
  "sections": [{
    "name": "Hero Section",
    "template": "<div class=\"text-center  p-10 bg-gray-100\"><h1 class=\"text-4xl font-bold\">{{title}}</h1><p class=\"mt-4\">{{subtitle}}</p><button class=\"mt-4 px-4 py-2 bg-blue-500 text-white\">{{button}}</button></div>",
    "values": {
      "title": { "label": "Title", "type": "text", "value": "Welcome" },
      "subtitle": { "label": "Subtitle", "type": "textarea", "value": "Build your website easily" },
      "button": { "label": "Button Text", "type": "text", "value": "Get Started" }
    }
  },]


}
export const ReactStaticPage = {
  "title": "Home Page",
  "sections": [{
            "_id": "69f4299142be6e68c701d482",
            "name": "HeroSection",
            "template":"function HeroSection({ title = 'Hero Section', subtitle = 'We build amazing experiences', image = 'https://i.pinimg.com/736x/d8/af/0d/d8af0d432eebda634921924c52aa78de.jpg', height = 'maxContent', titleSize = '50px', subtitleSize = '17px' }) { return (\<div className='rounded-[10px] w-full flex flex-col items-center justify-center p-[50px] bg-no-repeat bg-cover' style={{ backgroundImage: 'url(' + image.value + ')', height: height.value }}\> \<h1 className='text-white text-center leading-[0.8] font-bold' style={{ fontSize: titleSize.value }}\>{title.value}\</h1\> \<p className='w-[80%] text-center text-gray-400 text-[20px]' style={{ fontSize: subtitleSize.value }}\>{subtitle.value}\</p\> \</div\> ); }",
            "props": {
                "title": {
                    "label": "Title",
                    "type": "text",
                    "value": "Hero Section"
                },
                "subtitle": {
                    "label": "Subtitle",
                    "type": "textarea",
                    "value": "We build amazing experiences"
                },
                "image": {
                    "label": "Background Image",
                    "type": "text",
                    "value": "https://i.pinimg.com/736x/d8/af/0d/d8af0d432eebda634921924c52aa78de.jpg"
                },
                "height": {
                    "label": "Section Height",
                    "type": "text",
                    "value": "maxContent"
                },
                "titleSize": {
                    "label": "Title Font Size",
                    "type": "text",
                    "value": "30px"
                },
                "subtitleSize": {
                    "label": "Subtitle Font Size",
                    "type": "text",
                    "value": "15px"
                }
            },
            "createdAt": "2026-05-01T04:18:25.645Z",
            "updatedAt": "2026-05-01T04:41:08.825Z",
            "__v": 0
        }]


}

export const ReactAllTemplate = [

  {
    "_id": "69f381adf310391744e4acfd",
    "name": "HeroSection2",
    "template": "function HeroSection({ title = 'Hero Section', subtitle = 'We build amazing experiences', image = 'https://i.pinimg.com/736x/d8/af/0d/d8af0d432eebda634921924c52aa78de.jpg' }) { return (\<div className='rounded-[10px] h-[90vh] w-full flex flex-col items-center justify-center p-[50px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image})` }}\> \<h1 className='text-white text-[45px] text-center leading-[0.8] font-bold'\>{title}\</h1\> \<p className='w-[500px] text-center text-gray-400 text-[20px]'\>{subtitle}\</p\> \</div\> ); }",
    "createdAt": "2026-04-30T16:22:05.933Z",
    "updatedAt": "2026-04-30T16:22:05.933Z",
    "__v": 0
  },
  {
    "_id": "69f37aeef310391744e4acfc",
    "name": "HeroSection",
    "template": "function HeroSection({ title = 'Hero Section', subtitle = 'We build amazing experiences', image = 'https://i.pinimg.com/736x/d8/af/0d/d8af0d432eebda634921924c52aa78de.jpg' }) { return (\<div className='rounded-[10px] h-[90vh] w-full flex flex-col items-center justify-center p-[50px] bg-no-repeat bg-cover' style={{ backgroundImage: `url(${image})` }}\> \<h1 className='text-white text-[45px] text-center leading-[0.8] font-bold'\>{title}\</h1\> \<p className='w-[500px] text-center text-gray-400 text-[20px]'\>{subtitle}\</p\> \</div\> ); }",
    "createdAt": "2026-04-30T15:53:18.741Z",
    "updatedAt": "2026-04-30T15:53:18.741Z",
    "__v": 0
  }

]
export const AllTeplates = [
  {
    name: "Hero Section with Background",
    template: `<div class="flex items-center justify-center bg-cover bg-center"
 style="background-image: url('{{bgImage}}'); width: 100%; height: {{height}};">
<div class="text-center px-6">
  <h1 class="font-bold" style="color: {{titleColor}}; font-size: {{titleSize}};">
    {{title}}
  </h1>
  <p class="mt-4 text-lg" style="color: {{subtitleColor}}">
    {{subtitle}}
  </p>
</div>
</div>`,

    values: {
      bgImage: {
        label: "Background Image URL",
        type: "text",
        value: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      },
      title: {
        label: "Title",
        type: "text",
        value: "Welcome to Page"
      },
      subtitle: {
        label: "Subtitle",
        type: "textarea",
        value: "We build amazing experiences"
      },
      titleColor: {
        label: "Title Color",
        type: "text",
        value: "rgba(255, 255, 255, 0.01)ffff"
      },
      subtitleColor: {
        label: "Subtitle Color",
        type: "text",
        value: "#f3f4f6"
      },
      titleSize: {
        label: "Title Font Size",
        type: "text",
        value: "20px"
      },
      height: {
        label: "Section Height",
        type: "text",
        value: "150px"
      }
    }
  },
  {
    name: "Hero Section",
    template: `<div class="text-center p-10 bg-gray-100"> <h1 class="text-4xl font-bold">{{title}}</h1> <p class="mt-4">{{subtitle}}</p> <button class="mt-4 px-4 py-2 bg-blue-500 text-white">{{button}}</button>

  </div>`,
    values: {
      title: { label: "Title", type: "text", value: "Welcome" },
      subtitle: { label: "Subtitle", type: "textarea", value: "Build your website easily" },
      button: { label: "Button Text", type: "text", value: "Get Started" }
    }
  },

  {
    name: "Simple Text",
    template: `<div class="p-6"><p>{{text}}</p></div>`,
    values: {
      text: { label: "Text", type: "textarea", value: "Sample paragraph text" }
    }
  },

  {
    name: "Heading Only",
    template: `<div class="p-6"><h2 class="text-2xl">{{heading}}</h2></div>`,
    values: {
      heading: { label: "Heading", type: "text", value: "Section Title" }
    }
  },

  {
    name: "Image Only",
    template: `<div class="p-6"> <img src="{{image}}" style="width: {{width}}; height: {{height}};" />

  </div>`,
    values: {
      image: { label: "Image", type: "text", value: "https://i.pinimg.com/736x/45/a3/29/45a3296afe7ed4ce257dd5e9d7a23c21.jpg" },
      width: { label: "Width", type: "text", value: "100%" },
      height: { label: "Height", type: "text", value: "100%" }
    }
  },

  {
    name: "Button",
    template: `<div class="p-6 text-center"> <button class="px-4 py-2 bg-blue-500 text-white">{{text}}</button>

  </div>`,
    values: {
      text: { label: "Button Text", type: "text", value: "Click Me" }
    }
  },

  {
    name: "Two Image Grid",
    template: `<div class="grid grid-cols-2 gap-4 p-6"> <img src="{{img1}}" /> <img src="{{img2}}" />

  </div>`,
    values: {
      img1: { label: "Image 1", type: "text", value: "https://i.pinimg.com/736x/45/a3/29/45a3296afe7ed4ce257dd5e9d7a23c21.jpg" },
      img2: { label: "Image 2", type: "text", value: "https://i.pinimg.com/736x/45/a3/29/45a3296afe7ed4ce257dd5e9d7a23c21.jpg" }
    }
  },

  {
    name: "Three Column Text",
    template: `<div class="grid grid-cols-3 gap-4 p-6"> <p>{{text1}}</p> <p>{{text2}}</p> <p>{{text3}}</p>

  </div>`,
    values: {
      text1: { label: "Text 1", type: "textarea", value: "Column 1" },
      text2: { label: "Text 2", type: "textarea", value: "Column 2" },
      text3: { label: "Text 3", type: "textarea", value: "Column 3" }
    }
  },

  {
    name: "FAQ",
    template: `<div class="p-6"> <h3>{{question}}</h3> <p>{{answer}}</p>

  </div>`,
    values: {
      question: { label: "Question", type: "text", value: "What is this?" },
      answer: { label: "Answer", type: "textarea", value: "This is an answer." }
    }
  },

  {
    name: "Quote",
    template: `<div class="p-6 text-center italic">"{{quote}}"</div>`,
    values: {
      quote: { label: "Quote", type: "textarea", value: "Inspiration quote" }
    }
  }
];
