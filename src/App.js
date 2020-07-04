import { NavLink, Switch, Route } from 'react-router-dom';

import React from 'react';

function App() {
  return (
    <div>
      <Navbar>
        <NavLogo icon={<i class="fas fa-angle-double-right fa-2x"/>} title='Alan Xia' />
        <NavItem icon={<i class="fas fa-home fa-lg" />} category='Home' to='/'/>
        {/* <NavItem icon={<i class="fas fa-cat fa-2x" />} category='Pets' to='/about'/> */}
        <NavItem icon={<i class="fas fa-code fa-lg" />} category='Projects' to='/test'/>
        <NavItem icon={<i class="far fa-file fa-2x" />} category='Resume' to='/test'/>
        <NavItem icon={<i class="fas fa-language fa-lg" />} category='Languages' to='/about'/>
        <NavItem icon={<i class="far fa-address-book fa-2x" />} category='Contact' to='/contact'/>
        <NavThemify icon={[<i class="fas fa-moon fa-2x" />, <i class="fas fa-sun fa-2x" />, <i class="fas fa-cloud-sun fa-lg" />]} category='Themify' />
      </Navbar>
      <Main />
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> { props.children }</ul>
    </nav>
  );
}

function NavItem(props) {

  return (
    <li className="nav-item">
      <NavLink className="nav-link" exact activeClassName="current" to={props.to}>
        {props.icon}
        <span class="link-text">{props.category}</span>
      </NavLink>
    </li>
  );
}

function NavLogo(props) {

  return (
    <li className="logo">
      <NavLink className="nav-link" exact activeClassName="current" to='/'>
        <span class="link-text logo-text">{props.title}</span>
        {props.icon}
      </NavLink>
    </li>
  );

}

function NavThemify(props) {

  return (
    <li className="nav-item" id="themeButton">
      <a href="#" className="nav-link">
        {props.icon}
        <span class="link-text">{props.category}</span>
      </a>
    </li>
  );
}


const Main = () => (
  <main id="component">
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/test' component={Test}></Route>
    </Switch>
  </main>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
  </div>
);

const About = () => (
  <div className='about'>
    <h1>About Me</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
);

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const Test = () => (
    <div className='test'>
        <h1>Tech Bubble is Bursting....</h1>

        <p>
            I'm baby kale chips affogato ennui lumbersexual, williamsburg paleo quinoa
            iceland normcore tumeric. Kitsch coloring book retro, seitan schlitz
            tattooed biodiesel vexillologist neutra. Synth mumblecore deep v, umami
            selfies normcore gluten-free snackwave. Seitan ramps drinking vinegar
            venmo keytar, humblebrag VHS post-ironic tacos godard pour-over.
        </p>
        <p>
            Sartorial kogi taxidermy, kickstarter synth yr irony ennui everyday carry
            retro helvetica stumptown cloud bread squid echo park. Etsy cloud bread
            sartorial quinoa tacos beard mumblecore shaman tumblr pop-up. Twee retro
            fingerstache af helvetica pabst 8-bit leggings taiyaki portland ramps tbh
            tumblr vinyl. Neutra humblebrag bushwick portland subway tile plaid, offal
            scenester flexitarian cliche squid small batch palo santo. Palo santo meh
            adaptogen +1 3 wolf moon, listicle brunch ethical fanny pack everyday
            carry fam. Offal fingerstache taxidermy, man bun venmo PBR&amp;B helvetica
            thundercats everyday carry tote bag artisan cray wolf jianbing.
          </p>
          <p>
            Taxidermy thundercats whatever austin. VHS helvetica ethical, dreamcatcher
            enamel pin YOLO shabby chic locavore man bun crucifix pabst chillwave
            pop-up vegan. Air plant mlkshk ethical echo park tumeric, whatever
            crucifix godard scenester locavore pork belly yuccie vape. +1 gochujang
            put a bird on it, pork belly whatever selfies vaporware occupy banh mi
            normcore VHS. Cornhole normcore hashtag tilde. Hell of yr try-hard DIY raw
            denim banjo, enamel pin irony polaroid copper mug tofu. Dreamcatcher lomo
            literally 90's before they sold out, 3 wolf moon banh mi seitan chambray
            cliche offal tote bag occupy pug.
          </p>
          <p>
            Post-ironic hot chicken salvia yr yuccie ugh cold-pressed keffiyeh franzen
            viral taxidermy mustache slow-carb crucifix vape. Taiyaki yuccie hell of
            tacos PBR&amp;B, kitsch meggings tbh truffaut kickstarter mixtape af kogi.
            Fingerstache vegan tofu waistcoat gentrify cray. Drinking vinegar 3 wolf
            moon health goth craft beer master cleanse. Letterpress health goth 8-bit
            chillwave craft beer brooklyn. Chicharrones master cleanse 8-bit,
            mumblecore copper mug messenger bag poutine lomo kale chips flannel. Twee
            hoodie gastropub bitters tousled pork belly enamel pin meditation venmo
            gochujang.
          </p>
          <p>
            Next level selfies cronut ethical. Tofu tumblr you probably haven't heard
            of them, man braid literally forage swag chillwave. Pug yr flannel
            tumeric. Coloring book yr chillwave snackwave, shoreditch shaman gentrify
            typewriter tumeric DIY copper mug small batch. Scenester waistcoat YOLO
            hexagon kombucha poke 8-bit meditation. Selvage scenester forage
            williamsburg. Hoodie fingerstache tacos mustache, hashtag quinoa next
            level sartorial craft beer retro disrupt lo-fi.
          </p>
          <p>
            YOLO twee keytar farm-to-table flexitarian cardigan polaroid lumbersexual
            adaptogen drinking vinegar echo park dreamcatcher. Brunch shoreditch
            dreamcatcher iPhone knausgaard plaid edison bulb letterpress ethical yr
            fanny pack. Typewriter portland woke glossier cronut, post-ironic migas
            gentrify letterpress cray brunch lyft 8-bit master cleanse. Pitchfork
            thundercats organic pour-over unicorn lomo.
          </p>
          <p>
            Ugh yr tacos aesthetic everyday carry, tumeric selvage cliche skateboard.
            Wolf truffaut enamel pin vexillologist poutine. Hoodie roof party pabst,
            cardigan letterpress af disrupt +1 subway tile chillwave live-edge
            meggings next level readymade. Master cleanse gentrify hashtag, stumptown
            fam single-origin coffee occupy dreamcatcher air plant viral vexillologist
            enamel pin meggings. Tumblr chambray pickled microdosing austin scenester
            green juice.
          </p>
          <p>
            Austin four dollar toast church-key, vaporware hoodie edison bulb jean
            shorts sustainable williamsburg plaid helvetica scenester lomo humblebrag.
            Meditation tumblr kickstarter ennui williamsburg taiyaki pabst pour-over.
            8-bit godard cred, chillwave enamel pin skateboard you probably haven't
            heard of them. Meditation before they sold out single-origin coffee swag
            try-hard jianbing slow-carb shaman leggings. Palo santo shabby chic
            whatever man bun. Master cleanse wayfarers single-origin coffee pork belly
            cronut, normcore cliche jianbing before they sold out tousled shabby chic
            af pop-up gentrify. Direct trade la croix vexillologist jianbing,
            flexitarian selvage try-hard stumptown polaroid shaman wayfarers poke
            ramps food truck swag.
          </p>
          <p>
            Pok pok lumbersexual wayfarers, direct trade leggings poutine truffaut
            kitsch. Seitan aesthetic master cleanse squid coloring book banh mi YOLO
            vegan locavore vexillologist readymade next level pop-up edison bulb.
            Selvage knausgaard literally, quinoa photo booth 3 wolf moon microdosing
            freegan yuccie. Truffaut gentrify lomo put a bird on it waistcoat. Ugh
            austin distillery, tbh actually pork belly snackwave artisan mixtape
            quinoa vexillologist pok pok polaroid listicle readymade.
          </p>
          <p>
            Hammock letterpress prism dreamcatcher truffaut shabby chic vice
            cold-pressed. Franzen pug fashion axe before they sold out, tumblr irony
            kogi actually af bushwick banh mi. Snackwave bicycle rights tofu
            dreamcatcher tote bag pour-over meditation raw denim fanny pack. Pop-up
            retro taiyaki meditation twee gastropub VHS etsy. Semiotics gochujang
            street art normcore, edison bulb farm-to-table pour-over taxidermy
            brooklyn.
          </p>
      </div>
);


export default App;
