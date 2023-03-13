import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DailyCreationApp = () => (
  <div className="h-640px p-10 grid justify-center content-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      Daily Creation
    </h1>

    <Card variant="outlined" sx={{ minWidth: 275, minHeight: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Coming Soon
        </Typography>
      </CardContent>
    </Card>
  </div>
);

export { DailyCreationApp };
