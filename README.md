# App AdonisJS & NuxtJS
[![heart](https://img.shields.io/static/v1?label=Build%20With&message=❤&color=darkred&labelColor=red&style=for-the-badge)]()
[![foryou](https://img.shields.io/static/v1?label=For&message=You&color=aqua&labelColor=blue&style=for-the-badge)]()
[![license](https://img.shields.io/static/v1?label=License&message=MIT&color=green&labelColor=darkgreen&style=for-the-badge)]()
<br/>
<br/>
 An open source app for your personal website ! <br/>
 
 To use it refer you to the [documentation](#Guide).

## Features

* Authentication system
* Navbar included
* Sidebar included
* Header with Carousel
* Multi-language

## Technologies used
- [Bootstrap Vue](https://bootstrap-vue.org/docs/)
- [SASS](https://sass-lang.com/)
- [AdonisJS](https://preview.adonisjs.com/)
- [VueJS](https://vuejs.org/)
- [NuxtJS](https://nuxtjs.org/)

![Banner](https://github.com/Izoxy/adonis-nuxt-template/blob/master/assets/banner.png)

## Summary
* [Installation](#Installation)
* [Guide](#Guide)
* [Contributors](#Contributors)
* [License](#License)

### Installation

1. Clone the repository from `https://github.com/Izoxy/adonis-nuxt-template/`
2. Open a terminal in the folder
3. Type `yarn build-template`
4. For run the template in dev mode, you need to type `yarn api` to start the API and `yarn front` to start the frontend in different terminals.
5. For generate your site (in VPS), simply type `yarn run-template`

It's already finished, it's really quick to set up.

### Guide
#### Master - Sommaire

* [Controllers](#Controllers)
* [Models](#Models)
* [Validators](#Validators)
* [Layouts](#Layouts)
* [Configurations](#Configurations)
* [Middleware](#Middleware)
<br> - Routes
* [Configurations](#Configurations)
* [Auth](#Auth)
* [Lang](#Lang)
<br> - Use the translation
<br> - Add a language
* [Components](#Components)

##### For Adonis

The API is in `/api/app` and manage the connection with database to execute queries.

##### For Nuxt

You can also see the master of Nuxt in `/frontend` and see the main config in `/frontend/nuxt.config.js`.


###### Controllers

The controllers are the main functions which manage the users, cookies and the authentication system.
They are available in `/api/app/Controllers/Http`.

###### Models

The models are `BaseModel`, they serve to represent the tables from the database.
They are available in `/api/app/Models`

###### Validators

The validators serve to catch many errors that the user may cause (wrong email, etc...)
They are available in `/api/app/Validators/users`

##### Layouts

Here you can find the master from the application.
<br>
In `/layouts/master/master.vue`, you have the main layout.
<br>
You have also the index in `/frontend/pages/index.vue`

#### Configurations 

##### For Adonis
In `/api/config` you can see all configs which used by Adonis.

##### For Nuxt
In `/frontend/configurations` you can see all modules which manage many functions (Build, Axios, Meta, Plugins, etc...).
<br>
There are all registered in the main nuxt config `/frontend/nuxt.config.js`.

#### Middleware

For a perfect routing, we use the middleware suggested by Adonis and those of Nuxt.
<br>
In `/api/app/Middleware` and in `/frontend/middleware`.

##### Routes

The routes are registered in `/api/start/routes.ts`.

#### Auth
The authentication system is complexe.
We have many files who manage the system. 
<br>
We use Adonis for the back-end, the part who manage the database is in `/api/app`.
<br>
Moreover, we have a specific usage from the Cookie to save the data from the users. You can find it in `/front/store`

#### Lang

Here, we have the multi-language system. How to use it ? 
<br>
You need to add the [lang switcher](#LangSwitcher) in your layout for example.

##### Use the translation

For use the translation and others, refer you to the nuxt-i18n [documentation](https://nuxt-community.github.io/nuxt-i18n/).

Example :
```
{{ $t('welcome') }}
```

##### Add a language

We need to add your lang in `/frontend/configurations/Translations.js` in the locales field like that :
```
{
    code: 'en',
    name: 'English',
    file: 'en-US.js'
}
```
And you need to create your lang file in `/frontend/locales` like that :

```javascript
export default {
    welcome: 'Bienvenue',
}
```

#### Components
Here you can find the different add-ons available in our template.

- [Navbar](#Navbar)
- [Header](#Header)
- [Sidebar](#Sidebar)
- [Lang Switcher](#LangSwitcher)

If you encounter difficulties with one or more components, do not hesitate to contact [us](https://github.com/Izoxy).

##### Navbar
A simple navbar. You can see the documentation from Navbar [here](https://bootstrap-vue.org/docs/components/navbar).
<br>
Just import `<Navbar/>` from `/components/navbar/Navbar.vue`
And need to do add this in `<script></script>`
```javascript
import Navbar from "~/components/navbar/Navbar";
export default {
    name: "YourComponentName",
    components: { Navbar }
}
```
If you want to have it on all pages, putting it on the main `layout` is advisable.

##### Header
A simple header with a Carousel. You can see the documentation from Carousel [here](https://bootstrap-vue.org/docs/components/carousel).
<br>
Just import `<Header/>` from `/components/header/Header.vue`
And need to do add this in `<script></script>`
```javascript
import Header from "~/components/header/Header";
export default {
    name: "YourComponentName",
    components: { Header }
}
```

##### Sidebar
A simple sidebar.
<br>
Just import `<Sidebar/>` from `/components/sidebar/Sidebar.vue`
And need to do add this in `<script></script>`
```javascript
import Sidebar from "~/components/sidebar/Sidebar";
export default {
    name: "YourComponentName",
    components: { Sidebar }
}
```

##### LangSwitcher
It's a simple button with a dropdown to change the language.
You only have to import `<LangSwitcher/>` from `/components/langswitcher/LangSwitcher.vue`
And need to do add this in `<script></script>`
```javascript
import LangSwitcher from "~/components/langswitcher/LangSwitcher";
export default {
    name: "YourComponentName",
    components: { LangSwitcher }
}
```

### Contributors
* [Baptiste Parmantier](https://github.com/LeadcodeDev)
* [Alexandre Gossard](https://github.com/HakkaOfDev)

### License

Distributed under the MIT License. See [License](https://github.com/Izoxy/adonis-nuxt-template/blob/master/LICENSE) for more information.

### Made with ❤ by Izoxy
