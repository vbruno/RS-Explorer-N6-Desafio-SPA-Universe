export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  routes(event) {
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({}, "", event.target.href);

    this.handle();
  }

  handle() {
    const { pathname } = window.location;
    const route = this.routes[pathname] || this.routes[404];

    const links = document.querySelectorAll("a");
    switch (window.location.pathname) {
      case "/":
        links[1].classList.toggle("active");
        console.log("home");
        break;
      case "/universo":
        links[2].classList.toggle("active");
        console.log("universo");
        break;
      case "/exploracao":
        links[3].classList.toggle("active");
        console.log("exploracao");
        break;
      default:
        console.log("404");
        break;
    }

    console.log(route);
    fetch(route)
      .then((response) => response.text())
      .then((html) => {
        document.querySelector("#app").innerHTML = html;
      });
  }
}
