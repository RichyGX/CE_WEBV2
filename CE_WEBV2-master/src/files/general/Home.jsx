import { Layout } from "../../components/Layout"
import { useAuth } from "../../context/AuthContext"
import { HomeDirectivos } from "../directivos/HomeDirectivos";
import { HomePadres } from "../padres/HomePadres";


export const Home = () => {
  const { role } = useAuth();

  return (
    <Layout>
      {role==='directivos'&&(
        <HomeDirectivos></HomeDirectivos>
      )}
      {role==='padres_familia'&&(
        <>
          <HomePadres></HomePadres>
        </>
      )}
    </Layout>
  )
}
