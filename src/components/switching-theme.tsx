export const switchingThemeTest = () => {
  //data属性にthemeを設定,local storageに保存
  const setTheme = (newTheme: string) => {
    const theme = !(newTheme === 'dark' || newTheme === 'light') ? 'light' : newTheme;
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('theme', theme);
  };
  const getTheme = () => {
    const currentTheme = window.localStorage.getItem('theme');
    if (currentTheme) return currentTheme;
    //ユーザーが設定しているthemeを判定
    const query = window.matchMedia('(prefers-color-scheme: dark)');
    return query.matches ? 'dark' : 'light';
  };
  const changeTheme = () => {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };
  setTheme(getTheme());

  return (
    <>
      <button type='button' onClick={changeTheme}>
        Change Theme
      </button>
      <style jsx>{`
        button {
          border: 0;
          cursor: pointer;
          outline: none;
          padding: 10px 15px;
          appearance: none;
          background-color: var(--color-link);
          border-radius: 5px;
          color: var(--color-button-text);
        }
      `}</style>
    </>
  );
};

export default switchingThemeTest;
