import { Container, Box, Typography } from '@mui/material'
import { useTheme } from '@/context'
import { Project } from '../Project'
import styles from './Projects.module.css'

function Projects() {
  const { colors } = useTheme()

  return (
    <Box
      component="section"
      id="projetos"
      className={styles.projects}
      sx={{
        width: '100%',
        paddingTop: { xs: 4, md: 8 },
        paddingBottom: { xs: 4, md: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '1051px',
            margin: '0 auto',
            marginBottom: { xs: 4, md: 6 },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: colors.text,
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Projetos
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 6 },
            justifyContent: 'center',
            alignItems: 'flex-start',
          }}
        >
          <Project
            title="SigmaMarket - Gestão de Supermercado"
            image="/proj1.png"
            text="Sistema de gestão de supermercado desenvolvido durante a faculdade na disciplina de Laboratório de Programação de Sistemas. O projeto inclui gerenciamento de usuários, fornecedores, produtos, estoques e relatórios. Trabalho em grupo no GitHub com documentação completa, implementado em Java utilizando arquitetura MVC com Swing para a interface gráfica."
            href="https://github.com/EMarceloCM/LPS-Gestao-de-Supermercado"
          />
          <Project
            title="Expense Manager - UBS"
            image="/proj2.png"
            text="Sistema para gerenciamento de gastos por departamento desenvolvido em grupo de 6 pessoas para a UBS. Cada membro teve sua role definida (ex.: backend, Q&A, Lead, etc.), promovendo uma experiência profissional de desenvolvimento colaborativo com divisão clara de responsabilidades."
            href="https://github.com/kiyoshi2000/UBS-ExpenseManager"
          />
        </Box>
      </Container>
    </Box>
  )
}

export default Projects

