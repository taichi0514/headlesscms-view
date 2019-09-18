export default function ({ store, redirect }) {
  // ユーザが認証されてホームページにリダイレクトされた場合
  if (store.state.auth_check) {
    return redirect('/admin')
  }
}
