package MavenCollins.collinsID;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;  
import org.testng.annotations.BeforeTest;  
import org.testng.annotations.Test;  

public class testAutomation {
	public String baseUrl = "https://www.saucedemo.com/";  
	String driverPath = "D:\\Program\\Installed\\Eclipse\\Selenium\\Driver\\chromedriver.exe";  
	public WebDriver driver;
	
	@BeforeTest
	public void beforeTest() throws InterruptedException {    
		System.setProperty("webdriver.chrome.driver", driverPath);
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(5));  
		driver.manage().window().maximize();  
		driver.get(baseUrl);
	}
	
	@Test
	public void test() throws InterruptedException {
		driver.findElement(By.id("user-name")).sendKeys("standard_user");
		driver.findElement(By.id("password")).sendKeys("secret_sauce");
		Thread.sleep(300);
		driver.findElement(By.id("login-button")).click();
		
		Thread.sleep(500);
		
		driver.findElement(By.id("item_4_title_link")).click();
		
		Thread.sleep(500);
		
		driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
	}
	@AfterTest  
	public void afterTest() {  
		//driver.close(); 
	}         
}
