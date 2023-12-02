import React from "react";
import { GoInbox } from "react-icons/go";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/system";

export const App = () => {
  const theme = useTheme();

  const containerStyle = {
    backgroundImage: 'url("https://picsum.photos/seed/picsum/200/300")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  const paperStyle = {
    padding: theme.spacing(3),
    backgroundColor: "rgba(255, 255, 255, 0.3)", // Opacidad del 80%
  };

  return (
    <Container component="main" maxWidth="xl" style={containerStyle}>
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item lg={6} md={8} xs={12}>
          <Paper elevation={3} style={paperStyle}>
            <Typography variant="h5" gutterBottom>
              Formulario
              <GoInbox />
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Nombre"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Apellido"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Edad"
                    variant="outlined"
                    type="number"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="sexo-label">Sexo</InputLabel>
                    <Select labelId="sexo-label" label="Sexo" required>
                      <MenuItem value="masculino">Masculino</MenuItem>
                      <MenuItem value="femenino">Femenino</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="nivel-estudios-label">
                      Nivel de Estudios
                    </InputLabel>
                    <Select
                      labelId="nivel-estudios-label"
                      label="Nivel de Estudios"
                      required
                    >
                      <MenuItem value="primaria">Primaria</MenuItem>
                      <MenuItem value="secundaria">Secundaria</MenuItem>
                      <MenuItem value="universidad">Universidad</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Usuario"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contraseña"
                    variant="outlined"
                    type="password"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Confirmación de Contraseña"
                    variant="outlined"
                    type="password"
                    required
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{ marginTop: theme.spacing(2) }}
              >
                Registrarse
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
