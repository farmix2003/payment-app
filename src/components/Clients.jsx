import { clients } from "../utils/constants";
import { styles } from "../utils/styles";
import ClientsCard from "./ClientsCard";
const Clients = () => {
  return (
    <div id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap`}></div>
      {clients.map((client, idx) => (
        <ClientsCard key={client.id} {...client} idx={idx} />
      ))}
    </div>
  );
};

export default Clients;
