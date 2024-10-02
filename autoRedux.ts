import * as fs from 'fs'
import * as path from 'path'

// Interface para representar a estrutura da API
interface API {
	BASE: string
	GET_ALL: string
	GET_BY_ID: (id: number) => string
	CREATE: string
	UPDATE: (id: number) => string
	DELETE: (id: number) => string
}

// Função para criar arquivos Slice, API e adicionar rota ao apiRoutes.ts
function createReduxFiles(pageNames: string[]): void {
	pageNames.forEach((pageName) => {
		const folderPath = path.join(__dirname, `src/features/${pageName}`)

		// Cria a pasta para a página se não existir
		if (!fs.existsSync(folderPath)) {
			fs.mkdirSync(folderPath, { recursive: true })
			console.log(`Pasta criada: ${folderPath}`)
		} else {
			console.log(`Pasta já existe: ${folderPath}`)
		}

		// Conteúdo do Slice
		const sliceContent = `
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ${pageName}API } from './${pageName}API';

export interface ${pageName} {
  id: number;
  name: string;
  description: string;
}

interface ${pageName}State {
  items: ${pageName}[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ${pageName}State = {
  items: [],
  status: 'idle',
};

export const fetch${pageName}sAsync = createAsyncThunk(
  '${pageName}/fetch${pageName}s',
  async () => {
    const response = await ${pageName}API.fetchAll();
    return response.data;
  }
);

export const create${pageName}Async = createAsyncThunk(
  '${pageName}/create${pageName}',
  async (newItem: ${pageName}) => {
    const response = await ${pageName}API.create(newItem);
    return response.data;
  }
);

export const update${pageName}Async = createAsyncThunk(
  '${pageName}/update${pageName}',
  async (updatedItem: ${pageName}) => {
    const response = await ${pageName}API.update(updatedItem.id, updatedItem);
    return response.data;
  }
);

export const delete${pageName}Async = createAsyncThunk(
  '${pageName}/delete${pageName}',
  async (id: number) => {
    await ${pageName}API.delete(id);
    return id;
  }
);

const ${pageName}Slice = createSlice({
  name: '${pageName}',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetch${pageName}sAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetch${pageName}sAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.items = action.payload;
      })
      .addCase(create${pageName}Async.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(update${pageName}Async.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(delete${pageName}Async.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default ${pageName}Slice.reducer;
`

		const slicePath = path.join(folderPath, `${pageName}Slice.ts`)
		fs.writeFileSync(slicePath, sliceContent.trim())
		console.log(`Arquivo criado: ${slicePath}`)

		// Conteúdo da API
		const apiContent = `
import { apiClient } from '../../services/apiClient';

export const ${pageName}API = {
  fetchAll: () => apiClient.get('/${pageName.toLowerCase()}s'),
  fetchById: (id: number) => apiClient.get(\`/${pageName.toLowerCase()}s/\${id}\`),
  create: (newItem: any) => apiClient.post('/${pageName.toLowerCase()}s', newItem),
  update: (id: number, updatedItem: any) => apiClient.put(\`/${pageName.toLowerCase()}s/\${id}\`, updatedItem),
  delete: (id: number) => apiClient.delete(\`/${pageName.toLowerCase()}s/\${id}\`),
};
`

		const apiPath = path.join(folderPath, `${pageName}API.ts`)
		fs.writeFileSync(apiPath, apiContent.trim())
		console.log(`Arquivo criado: ${apiPath}`)

		// Adiciona a rota no arquivo apiRoutes.ts
		const servicesPath = path.join(__dirname, 'src/services')

		// Verifica se a pasta 'services' existe, se não, cria a pasta
		if (!fs.existsSync(servicesPath)) {
			fs.mkdirSync(servicesPath, { recursive: true })
			console.log(`Pasta criada: ${servicesPath}`)
		} else {
			console.log(`Pasta já existe: ${servicesPath}`)
		}

		const apiRoutesFilePath = path.join(servicesPath, 'apiRoutes.ts')

		// Verifica se o arquivo apiRoutes.ts existe, se não, cria o arquivo
		if (!fs.existsSync(apiRoutesFilePath)) {
			const initialContent = `export const API_BASE_URL = 'http://api.example.com';\n`
			fs.writeFileSync(apiRoutesFilePath, initialContent.trim())
			console.log(`Arquivo criado: ${apiRoutesFilePath}`)
		} else {
			console.log(`Arquivo já existe: ${apiRoutesFilePath}`)
		}

		const apiRoutesContent = fs.readFileSync(apiRoutesFilePath, 'utf8')

		const newRoute = `
export const ${pageName.toUpperCase()}_API: API = {
  BASE: \`\${API_BASE_URL}/${pageName.toLowerCase()}s\`,
  GET_ALL: \`\${API_BASE_URL}/${pageName.toLowerCase()}s\`,
  GET_BY_ID: (id: number) => \`\${API_BASE_URL}/${pageName.toLowerCase()}s/\${id}\`,
  CREATE: \`\${API_BASE_URL}/${pageName.toLowerCase()}s\`,
  UPDATE: (id: number) => \`\${API_BASE_URL}/${pageName.toLowerCase()}s/\${id}\`,
  DELETE: (id: number) => \`\${API_BASE_URL}/${pageName.toLowerCase()}s/\${id}\`,
};
`

		if (!apiRoutesContent.includes(`${pageName.toUpperCase()}_API`)) {
			fs.appendFileSync(apiRoutesFilePath, newRoute.trim())
			console.log(`Rota adicionada ao arquivo: ${apiRoutesFilePath}`)
		} else {
			console.log(`Rota já existe no arquivo: ${apiRoutesFilePath}`)
		}
	})

	console.log('Arquivos criados com sucesso para as páginas:', pageNames.join(', '))
}

// Exemplo de uso: passando os nomes das páginas para criar os arquivos
const pageNames: string[] = ['Authentication', 'ClientDetails', 'CloseTheLoop', 'Dashboard', 'PendingSearch', 'UserAlert'] // Exemplo

createReduxFiles(pageNames)
