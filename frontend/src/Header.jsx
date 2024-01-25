function Header({children}){
    return  <> 
    <div id="main-header-loading-editor"></div>
    <header id="main-header">
      <div id="header-title">
        <h1>XF</h1>
      </div>
      <nav>{children}</nav>
    </header>
    </>
}
export default Header;