# Star Wars  Week Films

 É um app para android ou ios construido com react native, com o intuito de aprendizagem sobre a plataforma Node.js utilizando  a linguagem typescript e a biblioteca react native. 
 O app star wars week films utiliza a Api pública SWAPI.dev, link.
 	[SWAPI](https://swapi.dev/ "SWAPI")

## Ferramentas e especificações:
  O projeto foi constuído utilizando estes recursos:
   - Plataforma: Node.Js
   - Linguagem: TypeScrip/(html5 e CSS)
   - Expo
   - Async-Storage: ferramenta para  persinstências de dados locais, utilizando chave e valor.
   - Effect Hocks: para fazer a chamada com a Api.
   - React-native-navigation: Stacks(utilização de navegação e pilha) e Tabs(utilização em abas).
   
## Arquitetura do projeto:
 
 O mesmo foi contruído utilizando a separação em camadas(componentes, páginas e rotas).

	Exemplo da arquitetura:

![](https://lh3.googleusercontent.com/4rcbhKyd3UVH8p9ywnEh9e8DNDM4jw5I_tiYzV9SqDkuOcNp5-_up4x0u_2QbcPzaceDdzyXTAWL7T9G3YcWs9vBgGAofH-G5mGML7KZqLcJ4lURyplZ_GZ07yWBwcLzqYUqj86onFWojB7YLyDhiNtn4yMKSmE440N5-DBZIaOiqGUWOVQMPend1wQmXQOEwYbGDKRuCOFyfNLpnG0YUHZ0RQ9FZVKhtfPnog_CjHkUFzTeTBAghb-kkr7suUFx0naC1ByHWu7cQ7KXJZXq-M_xrAWN7Mqn3fwTvvJufQobtpDXhguQ9Iy7jjqV7MH6sUCfnZP1csnaZ4-T7-DGnzYicq1xchbhOnhASRmCOq0cHRscui1sVU1icG9aW8maAZEzccdViJDTAJRxi2J1NF6psrAADCb9FPoXpqqEsQQ9IKlFFdqLosHxwdSIx7EAePEtLnq507G1Qv7kohmnclVMjpo34rbuiBHd9uxAezzlh6ZPek2oL0mmNtVBiBVyx0gjkMuNgieFUyKVzTbAqEKf34bZOls4nS4TT6Mn25WuKevihFoX8w9MQ8qWKeA9zv7V4cTXh_P-0Tm-MaTWBDoLP0eOdNJ25FHteSSKSEqZ8xcm0pQAqADimOfXZQ-p6KfTZY7XFFtl_Rhv-7-XGY57SI1ZJhPTGPve0jYTfTWumfTjiYraiuz8g3nz=w283-h730-no?authuser=0)

###Componentes:

	Exemplo de componente:
	
```javascript
interface PageHeaderProps {
    title: string;
    op?: boolean;
}
     

const PageHeader: React.FC<PageHeaderProps> = ({title, op}) => {
    const { goBack}  = useNavigation(); 

    function handleToBack(){
        goBack();
    }

    return (
        <View style={styles.container}>
            
            {
                op
                ?<View  style={[styles.topBar, {justifyContent: 'space-between'}]}  >
                {   op 
                    &&<TouchableOpacity 
                        onPress = {handleToBack}
                    >
                        <AntDesign style={styles.icon} name='back' />
                    </TouchableOpacity> 
                }
                <Image style={styles.logo} source={logoIcon} />
                <Ionicons name="md-heart-empty" style={{color:"#000"}} />
                    
                </View>
                :<View  style={[styles.topBar, {justifyContent: 'center'}]}  >
                    <Image style={styles.logo} source={logoIcon} />
                </View>
            }
            
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    );
      
    
}

export default PageHeader;
```
 
 

###Páginas:

	Exemplo de página:
	
```javascript
function Main() {
    const {navigate} = useNavigation();

    function navigationToMore(film:Films){
        navigate("More",film);
    }

    return (
        <>
        <PageHeader
        title="Films"
        />
    
        <View style={styles.container}>
        <ScrollView
            style={styles.scrollView}
        >
                {
                    films.map((filmItem:Films,index) =>{

                        return(
                            <RectButton 
                                onPress={() =>navigationToMore(filmItem)}
                            >
                                <FilmItem key={index} title={filmItem.title} name={filmItem.name}  />
                            </RectButton>
                        ) 
                    })
                }
                

            </ScrollView>
        </View>
        </>

    );
}

export default Main;
```

### Rotas:

	Exemplo de rota:
	
```javascript
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'

import SplashScreen from '../pages/SplashScreen';
import More from '../pages/More'
import Main from '../pages/Main';

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="SplashScreen" component={SplashScreen}/>
                <Screen name="Main" component={Main} />
                <Screen name="More" component={More} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack;
```
### Imagens do App:

	Tela de inicio:
	
![](https://lh3.googleusercontent.com/aPQFaLh-J3WQ3vuHvgb0a0u5zABMT7z3jrAKXSQ1xzU0OA0jmwUJNluXs0gVKDMe3wDBjIu6VtdJUnI-ZcTf-NUN8t4z1ztcg6N8fXXivLp9y1Qv9YHLFjX6Oax8GX9A6Cc0Y7wgxHQsfnepGdMxE8ChyRMZszkNLWZaP6v54557sA8fw9vBZzUajk4InclEmwHC0CjxsqmX2_HMxEVn0L1yF5X4X-3x1D7PfE824cpDtbb5BGFiufQDHYZtPVKQwU85q_FB0NNhXJE2uVCi21Dd-P6JFkiJ5_Sqrq5yVSohPg8QNzISdSvEWW5mCpYwZip11CHsmVh6uI51LC8215ai-HtgO91TF7fpuEpXhik5uS6XlzGvA9NKCHyHu_tr-eItX4tHiTu9DwDCg3MQlFI_jotnwuGizLiBu4oK5yqH7Ugh9GModdKp_mq8ucmJ_GW94_GU8bd5dO0HdHPb_CJBJzCypKOKjXMcBBzNf-1E-p2eVmBFBNvVB3c1Z8Zf2Q7hDy55sR9bAZjQ0CznMiV3UVZDTUfanm-BoNCT9nEgXSyadKqI9-7RwOcnLmBKhKKalpOaPotgf5puW4MnL40hsN1hSEzkGvBByTvfpXf_UPz6UVm69UPltztDW3cDD-ElK94XUliy02CjTHuPsfIiK_2JpBqNGg4a2EyKb_cxRQm1Pb21d8khauHC=w406-h850-no?authuser=0)

	Tela de Menu:

![](https://lh3.googleusercontent.com/qbJrmJqLmDI24K1SM4jCBDnzpPy41tBmnvv1sBkOr7DnUwbG5pen6iDTo2j-tNpLdBjB05nIBIxpjxyf-cDNvkIXbgZ-K7VTZFWTd9lSDEm9QYUUn_VNdcTUDQc1itjzTAiQCSoQABw3xfd6cZKYnJMqOSDDMVg50tIUYRs0B3Ykf2gDI_GJE_8xIxu-nD8G8pmX6mYZsBGp-lXOC9KHnhYz4Ir0H2mQWVlVvqMWpI3wTMxriA8KQfFXTICGQ7bJzrQ6-_PLsGf2qYWD9QHWkL1P4KNAiAqMxPiqavYNjydHVvQ32kYgVRr_CJDokPZf1OwI_0ROr0gGe_SEHYLdTKrCdziLiJ_qPYm431qbVmIk6EDR4yPS6jO797fGbLPu34XpCdAMeMtDRb2TplfnogJZKHRwUS2Ntvj74GTYizpW_QhLN-7s0kMqIr49Cj5Vbh_ZK6C56qBLPwC9nbc3G3BK-bXtjB_MLRMe010ZgElxRpaRpfJpsiHyEYKuLzt11EXj3jU9pxJJQyh7sy9zlVOMdyyBMBxk4oloVyyuzdFvu4Nm-ntUjSNmkg4xjjRXExtvW5gZejPMi2lB6LDhFepHrxWVepb4FGWCvUF19G7Eq_xuoFjLcbgTHW2mqnudFgGr9jXqGWtnGO2fyHJvZZ6U7Y-EehA6I3XKFgeVpI0pIyIn7tOFxe2-Y8bj=w408-h854-no?authuser=0)


	Tela de Detalhes:
	
![](https://lh3.googleusercontent.com/5_f61CYX0QhvhHYnD1Q3GAYndRRE0bYL4faksQkEWc13mAWdMyxTBLXdAZcIVt0UKVkUkqPRbc3__l0_DCKwTpluGSTyw0M_i5TLwhcwr5PUs37TEARSVPumbMBwksHWItknCIyjBHVnLqRXhnJh8SESkT3RGMTzbdDQ1XWNd6a42oigcDg0cxSSIsru4i6x3o53ltGamY0JtHrR3Amf7gzjingGxB4VKf6M20QA6N4Wuwkd7adXiPtzs-5lpmXGAIh80sVWmHQj2vV9NVACb7FT_ER7GRoBvnJUN9IA-u-GfEfvCxKgb8llbpC6trgfgkeXqaukEKX0u1uIs8PYyxhM_CTe3l8k8mM13v5Dr8otrascGV1CnwpJ8K81vVb8byPXWDSngS0O83kzTfmCKAsz7Hpzbx9dxaz1BoUXql9_R1OmAUOW_Tjq_LmZeHknqlg2gUqGy4L4uC34bPgGkp5kBAtlqbzdKHVdS6WenRnF728RI26dZtEVxLGSaJA4YjCRe3m9UZqqaOvxez5y3FB61jTtZ7Is15s6_kyFfN6MUYk4-r2v-ptwI23KwfRRY6opL5LHeulX-gEZlUJh_zsUbsouzOLpCH7QnW2ZVn6p67PIXDrUzToIFt50Wf_H9Sfqxyk2Aqa9YT8LsoyUDf30GjKsoyZYEgqwhriXi5Pr3kZXt2ifBwMXdeM_=w409-h846-no?authuser=0)

![](https://lh3.googleusercontent.com/FDus7X7uYJvMa7VJlZVS2HjrPaSJqPTe7rexI7cdVU180I95XgEuT3WyqTqpx6qLllzx3kHYc3yqxzguMiAsKmdLn2Jup7FCdxESGqAE4sz5l9BZroKJFqX7ZG5j1TuAl6CtIl-d1qljosXV-W1yrb6Du_NoiudRTD6iNu7MtWc-0_3s4TVImA9xm46_ufu-cSfz7tCI19dONXWOkk3g0bva6ve4P3fDsKxzzoNhr1RjP1Jx9_tyN7eeugQTcQVemK-g9ORhf8t5E40eSpQRau6v6VwGMsspBkwx_xnOKRonHMFfuowegphZUL9_CC4XCPOWSxOaBp_mcLH1FTlHDhHMaVk9zNw0qNVWZievWwyQJu-z2qAdG1awqf_-rES5ef0n8U77FHY5KGwak3BTRlIEDg94uw0X_FIxEKdlRLTmYap93tTlQSC8oMfCIKN9f8xypZoGNQ1_FHTkbJhrBLqNH1pdgXMd1FX_Byg-r6h1kG1jYSApm4gpfynBV6BBhGD6ZL3A1Ptqn0yL1XMHARMWvFsfo0Y4zoktp8uT8un4WlDKjtD0r6LHMi1UHx77-E3oRgzssnsN-seG-cjFYvdg4BxZu2KuGfx1wnrRGJRoS_3Zz4hHvqP6sTGQ5-g06k7CnpCZW2of1TaCBgJ5xn-HhtLA5KhNzsyKSDHZXFgbkaIJMvHOuBoVBENH=w415-h850-no?authuser=0)

#### Conclusão
  Agradeço por terem lido este documento sobre este pequeno projeto que possa servir de uso acadêmico, pois este foi um dos intuitos o aprendizado e espero que tenham gostado.
  App sem fins lucrátivos.......

