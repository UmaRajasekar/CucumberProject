# CucumberProject

Incase of using gradle and to pass cucumber options, use below option

test { 
    systemProperty "cucumber.options", System.getProperty("cucumber.options") 
}
