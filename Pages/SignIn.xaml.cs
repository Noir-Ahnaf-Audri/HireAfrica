using Microsoft.Maui.Controls;
using System;


namespace HireAfrica.Pages
{
    public partial class SignIn : ContentPage
    {
        public SignIn()
        {
            InitializeComponent();
        }

        private async void SignInButton_Clicked(object sender, EventArgs e)
        {
            if (string.IsNullOrWhiteSpace(EmailEntry.Text))
            {
                EmailError.IsVisible = true;
            }
            else
            {
                EmailError.IsVisible = false;
            }

            if (string.IsNullOrWhiteSpace(PasswordEntry.Text))
            {
                PasswordError.IsVisible = true;
            }
            else
            {
                PasswordError.IsVisible = false;
            }

            if (!EmailError.IsVisible && !PasswordError.IsVisible)
            {
                // Here you can add authentication logic (e.g., Firebase, API call, etc.)
                await DisplayAlert("Success", "Signed in successfully!", "OK");

                // Navigate to the Main Page after successful login
                await Navigation.PushAsync(new MainPage());
            }
        }

        private async void SignUpButton_Clicked(object sender, EventArgs e)
        {
            // Navigate to the Sign-Up Page (you need to create this page separately)
            await Navigation.PushAsync(new Create());
        }
    }
}
