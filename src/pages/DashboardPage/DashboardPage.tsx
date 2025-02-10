import Layout from "../../Layout";
import Card from "./Cards/Card";

const DashboardPage = () => {
  return (
    <Layout>
      <div className="w-auto p-3">
        <h1>Dashboard Page</h1>
        <div className="grid grid-cols-4 gap-4">
          <Card title="Hello World" classParam="" details="1" />
          <Card title="Hello World" classParam="" details="2" />
          <Card title="Hello World" classParam="" details="3" />
          <Card title="Hello World" classParam="" details="4" />
          <Card title="Hello World" classParam="" details="5" />
          <Card title="Hello World" classParam="" details="6" />
          <Card title="Hello World" classParam="" details="7" />
          <Card title="Hello World" classParam="" details="8" />
          <Card title="Hello World" classParam="" details="9" />
          <Card title="Hello World" classParam="" details="10" />
          <Card title="Hello World" classParam="" details="11" />
          <Card
            title="Hello World"
            classParam="col-[2_/_span_3]"
            details="12"
          />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
