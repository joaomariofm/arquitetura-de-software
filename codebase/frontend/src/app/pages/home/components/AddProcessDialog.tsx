import { useApi, useSnackbar } from "@/app/shared/hooks";
import { Col } from "@/app/shared/styled";
import { addProcessService } from "@/services";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

const AddProcessDialog = ({ handleClose }: { handleClose: () => void }) => {
  const api = useApi();
  const { openSnackbar } = useSnackbar();
  const [form, setForm] = useState<{
    ano: Date | null;
    inicio: Date | null;
    termino: Date | null;
  }>({ ano: null, inicio: null, termino: null });

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (!form.ano || !form.inicio || !form.termino) {
      openSnackbar("Preencha todos os campos", "error");
      return;
    }

    const data = {
      ano: new Date(String(form.ano))?.getFullYear(),
      inicio: form.inicio.toISOString(),
      termino: form.termino.toISOString(),
    };

    try {
      const res = await addProcessService(api, data);
      openSnackbar("PS cadastrado com sucesso", "success");
      handleClose();
    } catch (err) {
      openSnackbar("Erro ao cadastrar", "error");
    }
  };

  return (
    <>
      <Dialog open={true} maxWidth="sm" fullWidth onClose={handleClose}>
        <Col component="form" onSubmit={handleSubmit}>
          <DialogTitle>Novo Processo Seletivo</DialogTitle>
          <DialogContent dividers>
            <Col gap={2}>
              <DatePicker
                label="Ano"
                views={["year"]}
                disablePast
                value={form.ano}
                onChange={(newValue) => {
                  setForm({ ...form, ano: newValue });
                }}
                renderInput={(params) => (
                  <TextField required name="ano" {...params} />
                )}
              />

              <DatePicker
                label="Início"
                value={form.inicio}
                views={["month", "day"]}
                disablePast
                onChange={(newValue) => {
                  setForm({ ...form, inicio: newValue });
                }}
                renderInput={(params) => (
                  <TextField required name="inicio" {...params} />
                )}
              />

              <DatePicker
                label="Término"
                disablePast
                views={["month", "day"]}
                value={form.termino}
                onChange={(newValue) => {
                  setForm({ ...form, termino: newValue });
                }}
                renderInput={(params) => (
                  <TextField required name="termino" {...params} />
                )}
              />
            </Col>
          </DialogContent>
          <DialogActions sx={{ p: "14px 8px" }}>
            <Button variant="outlined" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="contained" type="submit">
              Cadastrar
            </Button>
          </DialogActions>
        </Col>
      </Dialog>
    </>
  );
};

export default AddProcessDialog;
