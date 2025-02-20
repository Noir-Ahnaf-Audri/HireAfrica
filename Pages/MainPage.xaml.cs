using Microsoft.Maui.Controls;

namespace HireAfrica.Pages
{
    public partial class MainPage : ContentPage
    {
        public MainPage()
        {
            InitializeComponent();
            studentbtn.Clicked += Studentbtn_Clicked;
            employerbtn.Clicked += Employerbtn_Clicked;
        }

        private async void Studentbtn_Clicked(object? sender, EventArgs e)
        {
            await Navigation.PushAsync(new Create());
            // await Navigation.PushAsync(new StudentPage());
        }

        private async void Employerbtn_Clicked(object? sender, EventArgs e)
        {
            await Navigation.PushAsync(new Create());
            // Navigate to the employer page
            // await Navigation.PushAsync(new EmployerPage());
        }

    }
}
