import React from "react";
import Login from "../../containers/auth/Login";

const Header = props => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="{{ url('/') }}">
          مؤسسة أرض البركة العقارية
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="{{ __('Toggle navigation') }}"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>

          <ul className="navbar-nav mr-auto">
            {!props.user && (
              <>
                <li className="nav-item">
                  <Login />
                </li>
                {props.canRegister && (
                  <li className="nav-item">
                    <a className="nav-link" href="{{ route('register') }}">
                      للتسجيل
                    </a>
                  </li>
                )}
              </>
            )}
            {props.user && (
              <li className="nav-item dropdown">
                <a
                  id="navbarDropdown"
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  v-pre
                >
                  {props.user.name} <span className="caret"></span>
                </a>

                <div
                  className="dropdown-menu dropdown-menu-left"
                  aria-labelledby="navbarDropdown"
                >
                  <a
                    className="dropdown-item"
                    href="{{ route('logout') }}"
                    onclick="event.preventDefault();
                                                document.getElementById('logout-form').submit();"
                  >
                    خروج
                  </a>

                  <form
                    id="logout-form"
                    action="{{ route('logout') }}"
                    method="POST"
                    style="display: none;"
                  >
                    @csrf
                  </form>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
