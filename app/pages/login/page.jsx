
const Login = () => {
  return (
    <div className={`section`}>
      <h2>Bejelentkezés</h2>

      <p>
        <label for="user_login">Username or Email Address</label>
        <input type="text" name="log" id="user_login" class="input" value="" size="20" autocapitalize="none" autocomplete="username" required="required"/>
          <div data-lastpass-icon-root=""></div></p>

      <div class="user-pass-wrap">
        <label for="user_pass">Password</label>
        <div class="wp-pwd">
          <input type="password" name="pwd" id="user_pass" class="input password-input" value="" size="20" autocomplete="current-password" spellcheck="false" required="required"/>
            <div  data-lastpass-icon-root=""></div><button type="button" class="button button-secondary wp-hide-pw hide-if-no-js" data-toggle="0" aria-label="Show password">
              <span class="dashicons dashicons-visibility" aria-hidden="true"></span>
            </button>
        </div>
      </div>
      <p class="forgetmenot"><input name="rememberme" type="checkbox" id="rememberme" value="forever"/> <label for="rememberme">Remember Me</label></p>
      <p class="submit">
        <input type="submit" name="wp-submit" id="wp-submit" class="button button-primary button-large" value="Log In"/>
          <input type="hidden" name="redirect_to" value="/recipes/"/>
            <input type="hidden" name="testcookie" value="1"/>
            </p>

          </div>
          );
  };

          export default Login;
