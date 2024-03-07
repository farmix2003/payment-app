import { clients } from "../utils/constants";
import { styles } from "../utils/styles";
import ClientsCard from "./ClientsCard";
const Clients = () => {
  return (
    <div className={`${styles.flexCenter}`}>
      <div className={`${styles.flexCenter}`}></div>
      {clients.map((client, idx) => (
        <ClientsCard key={client.id} {...client} idx={idx} />
      ))}
    </div>
  );
};

export default Clients;
